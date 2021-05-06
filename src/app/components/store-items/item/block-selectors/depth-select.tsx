import React from "react"
import { DepthType, DepthViewType, PizzaType } from "../../../../types"
import { useSelector } from "react-redux"
import { itemSelectors } from "../../../../bus/item/selectors"
import { ActiveItemType } from "../../../../hooks/useSetActiveItem"

interface Props {
  itemStore: PizzaType
  active: ActiveItemType
  setActive: (id: ActiveItemType) => void
}

const DepthSelect = ({ itemStore, active, setActive }: Props) => {
  const { depth } = active
  const { availableDepths } = itemStore
  const depths = useSelector(itemSelectors.depthsSelect) as DepthType[]
  const depthsView: DepthViewType[] = depths.reduce((acc: any, cur) => {
    return [...acc, { ...cur, visible: availableDepths.includes(cur.id) }]
  }, [] as DepthViewType[])

  return (
    <ul>
      {depthsView.map((d: DepthViewType) => {
        const { title, id, visible } = d
        return (
          <li
            onClick={() => setActive({ ...active, depth: id })}
            key={title}
            className={`
          ${!visible ? "disableItem disableItem--gray" : ""} 
          ${depth === id && visible ? "active" : ""}`}
          >
            {title}
          </li>
        )
      })}
    </ul>
  )
}

export default DepthSelect
