import { CartActionType } from "./types"
import { ActionDataType } from "../../init/rootReducer"
import { CartItemType } from "../../types"
import { CartStateType } from "./reducer"

export type CartActionsType = {
  fill: (data: CartStateType) => ActionDataType
  add: (data: CartItemType) => ActionDataType
  inc: (id: string) => ActionDataType
  dec: (id: string) => ActionDataType
  del: (id: string) => ActionDataType
  clear: () => ActionDataType
  recalculate: (data: unknown) => ActionDataType
}

export const cartActions: CartActionsType = {
  fill: (data) => ({ type: CartActionType.fill, payload: data }),
  add: (data) => ({ type: CartActionType.add, payload: data }),
  inc: (id) => ({ type: CartActionType.inc, payload: id }),
  dec: (id) => ({ type: CartActionType.dec, payload: id }),
  del: (id) => ({ type: CartActionType.del, payload: id }),
  clear: () => ({ type: CartActionType.clear }),
  recalculate: (data) => ({
    type: CartActionType.recalculate,
    payload: data,
  }),
}
