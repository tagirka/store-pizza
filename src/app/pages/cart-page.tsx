import React from "react"
import StoreLayout from "../layouts/store-layout"
import CartTop from "../components/cart-top/cart-top"
import CartItems from "../components/cart-items/cart-items"
import CartBottom from "../components/cart-bottom/cart-bottom"
import { useSelector } from "react-redux"
import { itemSelectors } from "../bus/item/selectors"

import { Redirect } from "react-router-dom"

const CartPage = () => {
  const isLoaded = useSelector(itemSelectors.isLoadedSelect)
  if (!isLoaded) return <Redirect to="/" />

  return (
    <StoreLayout>
      <div className="content">
        <div className="container container--cart">
          <div className="cart">
            <CartTop />
            <CartItems />
            <CartBottom />
          </div>
        </div>
      </div>
    </StoreLayout>
  )
}

export default CartPage
