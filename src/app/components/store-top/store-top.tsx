import React, { FC } from "react"
import CategoryList from "./category-list"
import SortSelect from "./sort-select"

const StoreTop: FC = () => {
  return (
    <div className="content__top">
      <CategoryList />
      <SortSelect />
    </div>
  )
}

export default StoreTop
