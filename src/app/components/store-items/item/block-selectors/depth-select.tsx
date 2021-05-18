import React, { FC } from "react"
import { DepthViewType, PizzaType } from "../../../../types"
import { useSelector } from "react-redux"
import { itemSelectors } from "../../../../bus/item/selectors"
import { ActiveItemType } from "../../../../hooks/useSetActiveItem"

type PropsType = {
  itemStore: PizzaType
  active: ActiveItemType
  setActive: (id: ActiveItemType) => void
}

const DepthSelect: FC<PropsType> = ({ itemStore, active, setActive }) => {
  const { depth } = active
  const { availableDepths } = itemStore
  const depths = useSelector(itemSelectors.depthsSelect)

  const depthsView = depths.reduce((acc, cur) => {
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
