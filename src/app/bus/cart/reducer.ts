import { CartActionType } from "./types"
import { CartItemType } from "../../types"
import { ActionDataType } from "../../init/rootReducer"

export interface CartStateType {
  items: CartItemType[]
  total: { totalSum: number; totalCount: number }
}

const initialState: CartStateType = {
  items: [],
  total: { totalSum: 0, totalCount: 0 },
}

export const cartReducer = (
  state = initialState,
  { type, payload }: ActionDataType
): CartStateType => {
  switch (type) {
    case CartActionType.fill: {
      return { ...state, ...(payload as CartStateType[]) }
    }
    case CartActionType.clear: {
      return initialState
    }

    case CartActionType.add:
      return state
    case CartActionType.inc:
      return state
    case CartActionType.dec:
      return state
    case CartActionType.del:
      return state
    case CartActionType.recalculate:
      return state

    default: {
      return state
    }
  }
}
