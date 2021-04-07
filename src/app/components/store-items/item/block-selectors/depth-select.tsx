import React from "react"
import { DepthType, DepthViewType, PizzaType } from "../../../../types"
import { useSelector } from "react-redux"
import { itemSelectors } from "../../../../bus/item/selectors"

interface Props {
  itemStore: PizzaType
  active: number | null
  setActive: (id: number | null) => void
}

const DepthSelect = ({ itemStore, active, setActive }: Props) => {
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
            onClick={() => setActive(id)}
            key={title}
            className={`
          ${!visible ? "disableItem disableItem--gray" : ""} 
          ${active === id && visible ? "active" : ""}`}
          >
            {title}
          </li>
        )
      })}
    </ul>
  )
}

export default DepthSelect
