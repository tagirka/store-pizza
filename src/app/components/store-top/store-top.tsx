import React from "react"
import CategoryList from "./category-list"
import SortSelect from "./sort-select"

const StoreTop = () => {
  return (
    <div className="content__top">
      <CategoryList />
      <SortSelect />
    </div>
  )
}

export default StoreTop
