import { CartActionType } from "./types"
import { CartItemType } from "../../types"

export interface CartStateType {
  items: CartItemType[]
  total: { totalSum: number; totalCount: number }
}

const initialState: CartStateType = {
  items: [],
  total: { totalSum: 0, totalCount: 0 },
}

export const cartReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case CartActionType.fill: {
      return { ...state, ...payload }
    }
    case CartActionType.clear: {
      return initialState
    }

    default: {
      return state
    }
  }
}
