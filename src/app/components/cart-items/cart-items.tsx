import React, { FC } from "react"
import CartItem from "./cart-item/cart-item"

import { cartSelectors } from "../../bus/cart/saga/selectors"
import { CartItemType } from "../../types"
import { useGetCartItems } from "../../hooks/useGetCartItems"

const CartItems: FC = () => {
  const [cartItems] = useGetCartItems(cartSelectors.items)

  return (
    <div className="content__items">
      {cartItems.map((item: CartItemType) => {
        return <CartItem key={item.idCart} item={item} />
      })}
    </div>
  )
}

export default CartItems
