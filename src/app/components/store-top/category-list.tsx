import React, { useState } from "react"

import { viewSelectors } from "../../bus/view/saga/selectors"

import { useDispatch, useSelector } from "react-redux"
import CategoryListRender from "./category-list-render"
import { ViewAction } from "../../bus/view/actions"

const CategoryList = () => {
  const dispatch = useDispatch()
  const categoriesView: number[] = useSelector(
    viewSelectors.categoriesViewSelect
  )

  const [activeItem, setActiveItem] = useState(0)

  const handleSelectedCategory = (id = 0) => {
    setActiveItem(id)
    dispatch(ViewAction.filter(id))
  }

  return (
    <div className="categories">
      <ul>
        <li
          className={activeItem === 0 ? "active" : ""}
          onClick={() => handleSelectedCategory(0)}
        >
          Все
        </li>
        {categoriesView.map((category) => {
          return (
            <CategoryListRender
              key={category}
              id={category}
              active={activeItem}
              handleSelected={handleSelectedCategory}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default CategoryList
