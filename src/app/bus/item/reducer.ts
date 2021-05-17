import { CategoryType, DepthType, PizzaType, SizeType } from "../../types"

import { ItemActionEnum } from "./types"
import { ActionDataType } from "../../init/rootReducer"

export type ItemStateType = {
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

export const itemReducer = (
  state = initialState,
  { type, payload }: ActionDataType
): ItemStateType => {
  switch (type) {
    case ItemActionEnum.fill: {
      return { ...state, ...(payload as ItemStateType) }
    }
    case ItemActionEnum.loaded: {
      return { ...state, isLoaded: payload as boolean }
    }
    case ItemActionEnum.error: {
      return { ...state, isError: payload as boolean }
    }

    case ItemActionEnum.fetch: {
      return state
    }

    default: {
      return state
    }
  }
}
