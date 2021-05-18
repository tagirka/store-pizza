import React, { FC } from "react"
import { PizzaType, SizeType, SizeViewType } from "../../../../types"
import { useSelector } from "react-redux"
import { itemSelectors } from "../../../../bus/item/selectors"
import { ActiveItemType } from "../../../../hooks/useSetActiveItem"

type PropsType = {
  itemStore: PizzaType
  active: ActiveItemType
  setActive: (id: ActiveItemType) => void
}

const SizeSelect: FC<PropsType> = ({ itemStore, active, setActive }) => {
  const { size } = active
  const { availableSizes } = itemStore
  const sizesStore = useSelector(itemSelectors.sizesSelect)
  const sizesView: SizeViewType[] = sizesStore.reduce((acc, cur: SizeType) => {
    return [...acc, { ...cur, visible: availableSizes.includes(cur.id) }]
  }, [] as SizeViewType[])

  return (
    <ul>
      {sizesView.map((s) => {
        const { id, title, visible } = s

        return (
          <li
            key={title}
            className={`
            ${!visible ? "disableItem disableItem--gray" : ""} 
            ${size === id && visible ? "active" : ""}
            `}
            onClick={() => setActive({ ...active, size: id })}
          >
            {title}
          </li>
        )
      })}
    </ul>
  )
}

export default SizeSelect
