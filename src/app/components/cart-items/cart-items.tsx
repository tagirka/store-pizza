import React from "react"
import CartItem from "./cart-item/cart-item"
import { useSelector } from "react-redux"
import { cartSelectors } from "../../bus/cart/saga/selectors"
import { CartItemType } from "../../types"

const CartItems = () => {
  const cartItems: CartItemType[] = useSelector(cartSelectors.items)

  return (
    <div className="content__items">
      {cartItems.map((item: CartItemType) => {
        return <CartItem key={item.idCart} item={item} />
      })}
    </div>
  )
}

export default CartItems
