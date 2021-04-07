import { StateType } from "../../../init/rootReducer"
import { CartItemType } from "../../../types"

export const cartSelectors = {
  items: (state: StateType) => state.cart.items,

  itemCart: (id: string) => (state: StateType) =>
    state.cart.items.find((c: CartItemType) => c.idCart === id),
  total: (state: StateType) => state.cart.total,
}
