import React, { FC } from "react"
import StoreItem from "./item/store-item"

import { useGetView } from "../../hooks/useGetView"
import { viewSelectors } from "../../bus/view/saga/selectors"

const StoreItems: FC = () => {
  const [pizzasView] = useGetView(viewSelectors.pizzasViewSelect)

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
