import React, { FC } from "react"

import CategoryListRender from "./category-list-render"

import { useGetView } from "../../hooks/useGetView"
import { viewSelectors } from "../../bus/view/saga/selectors"
import { useSetActiveCategory } from "../../hooks/useSetActiveCategory"
import { useDispatch } from "react-redux"
import { ViewAction } from "../../bus/view/actions"

const CategoryList: FC = () => {
  const dispatch = useDispatch()
  const [categoriesView] = useGetView(viewSelectors.categoriesViewSelect)

  const [activeItem, setActiveItem] = useSetActiveCategory(0)

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
