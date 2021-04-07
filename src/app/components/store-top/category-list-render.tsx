import React from "react"
import { useSelector } from "react-redux"
import { itemSelectors } from "../../bus/item/selectors"

interface Props {
  id: number
  active: number
  handleSelected: (id: number) => void
}

const CategoryListRender = ({ id, active, handleSelected }: Props) => {
  const { title } = useSelector(itemSelectors.categoryByIdSelect(id))

  return (
    <div>
      <li
        className={active === id ? "active" : ""}
        onClick={() => handleSelected(id)}
      >
        {title}
      </li>
    </div>
  )
}

export default CategoryListRender
