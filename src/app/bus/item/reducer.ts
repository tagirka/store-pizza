import { CategoryType, DepthType, PizzaType, SizeType } from "../../types"

import { ItemActionEnum } from "./types"

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

export const itemReducer: (
  state: ItemStateType,
  { type, payload, error }: any
) => any = (state = initialState, { type, payload, error }: any) => {
  switch (type) {
    case ItemActionEnum.fill: {
      return { ...state, ...payload }
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
