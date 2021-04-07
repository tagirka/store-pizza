import React from "react"
import { PizzaType, SizeType, SizeViewType } from "../../../../types"
import { useSelector } from "react-redux"
import { itemSelectors } from "../../../../bus/item/selectors"

interface Props {
  itemStore: PizzaType
  active: number | null
  setActive: (id: number | null) => void
}

const SizeSelect = ({ itemStore, active, setActive }: Props) => {
  const { availableSizes } = itemStore
  const sizesStore = useSelector(itemSelectors.sizesSelect)
  const sizesView: SizeViewType[] = sizesStore.reduce(
    (acc: any, cur: SizeType) => {
      return [...acc, { ...cur, visible: availableSizes.includes(cur.id) }]
    },
    []
  )

  return (
    <ul>
      {sizesView.map((size) => {
        const { id, title, visible } = size

        return (
          <li
            key={title}
            className={`
            ${!visible ? "disableItem disableItem--gray" : ""} 
            ${active === id && visible ? "active" : ""}
            `}
            onClick={() => setActive(id)}
          >
            {title}
          </li>
        )
      })}
    </ul>
  )
}

export default SizeSelect
