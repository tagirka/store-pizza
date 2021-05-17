import React, { FC } from "react"
import { useSelector } from "react-redux"
import { itemSelectors } from "../../bus/item/selectors"
import { CategoryType } from "../../types"

interface PropsType {
  id: number
  active: number
  handleSelected: (id: number) => void
}

const CategoryListRender: FC<PropsType> = ({ id, active, handleSelected }) => {
  const category = useSelector(itemSelectors.categoryByIdSelect(id))

  const { title } = category as CategoryType

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
