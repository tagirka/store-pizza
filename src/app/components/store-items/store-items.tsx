import React, { FC } from "react"
import StoreItem from "./item/store-item"

import { useGetView } from "../../hooks/useGetView"
import { viewSelectors } from "../../bus/view/saga/selectors"

const StoreItems: FC = () => {
  const [pizzasView] = useGetView(viewSelectors.pizzasViewSelect)

  return (
    <div className="content__items">
      {pizzasView.map((pizzaId) => (
        <StoreItem key={pizzaId} viewId={pizzaId} />
      ))}
    </div>
  )
}

export default StoreItems
