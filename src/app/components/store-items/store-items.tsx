import React from "react"
import StoreItem from "./item/store-item"
import { useSelector } from "react-redux"
import { viewSelectors } from "../../bus/view/saga/selectors"

const StoreItems = () => {
  const pizzasView = useSelector(viewSelectors.pizzasViewSelect)

  return (
    <div className="content__items">
      {pizzasView
        .filter((p: number | null) => p !== null)
        .map((pizzaId: number) => (
          <StoreItem key={pizzaId} viewId={pizzaId} />
        ))}
    </div>
  )
}

export default StoreItems
