import { CartActionType } from "./types"

export const cartActions = {
  fill: (data: any) => ({ type: CartActionType.fill, payload: data }),
  add: (data: any) => ({ type: CartActionType.add, payload: data }),
  inc: (id: string) => ({ type: CartActionType.inc, payload: id }),
  dec: (id: string) => ({ type: CartActionType.dec, payload: id }),
  del: (id: string) => ({ type: CartActionType.del, payload: id }),
  clear: () => ({ type: CartActionType.clear }),
  recalculate: (data: any) => ({
    type: CartActionType.recalculate,
    payload: data,
  }),
}
