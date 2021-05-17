import { StateType } from "../../../init/rootReducer"
import { CartItemType } from "../../../types"

export type CartSelectorsType = typeof cartSelectors.items

export const cartSelectors = {
  items: (state: StateType): CartItemType[] => state.cart.items,

  itemCart: (id: string) => (state: StateType): CartItemType | undefined =>
    state.cart.items.find((c: CartItemType) => c.idCart === id),
  itemByIdCart: (id: number) => (state: StateType): CartItemType[] =>
    state.cart.items.filter((c: CartItemType) => c.idItem === id),
  total: (state: StateType): { totalSum: number; totalCount: number } =>
    state.cart.total,
}
