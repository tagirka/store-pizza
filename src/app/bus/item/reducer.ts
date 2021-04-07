import { CategoryType, DepthType, PizzaType, SizeType } from "../../types"

import { ItemActionType } from "./types"

export interface ItemStateType {
  pizzas: PizzaType[]
  categories: CategoryType[]
  depths: DepthType[]
  sizes: SizeType[]
  isLoaded?: boolean
  isError?: boolean
}

const initialState: ItemStateType = {
  pizzas: [],
  categories: [],
  depths: [],
  sizes: [],
  isError: false,
  isLoaded: false,
}

export const itemReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case ItemActionType.fill: {
      return { ...state, ...payload }
    }
    case ItemActionType.loaded: {
      return { ...state, isLoaded: payload as boolean }
    }
    case ItemActionType.error: {
      return { ...state, isError: payload as boolean }
    }

    default: {
      return state
    }
  }
}
