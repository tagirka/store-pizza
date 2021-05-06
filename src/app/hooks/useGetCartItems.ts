import { CartItemType } from "../types"
import { useSelector } from "react-redux"
import { CartSelectorsType } from "../bus/cart/saga/selectors"

type UseGetCartItemsType = (selector: CartSelectorsType) => [CartItemType[]]

export const useGetCartItems: UseGetCartItemsType = (selector) => {
  const cartItems: CartItemType[] = useSelector(selector)

  return [cartItems]
}
