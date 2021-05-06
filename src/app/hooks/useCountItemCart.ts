import { useSelector } from "react-redux"
import { cartSelectors } from "../bus/cart/saga/selectors"
import { CartItemType } from "../types"

export const useCountItemCart = (id: number) => {
  const countInCart = useSelector(cartSelectors.itemByIdCart(id))

  if (countInCart.length === 0) return [0]

  const count = countInCart.reduce((arr: number, cur: CartItemType) => {
    return arr + cur.count
  }, 0)

  return [count]
}
