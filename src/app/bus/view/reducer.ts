import { ViewActionType } from "./types"

export interface ViewStateType {
  pizzasView: (number | null)[]
  categoriesView: number[]
}

const initialState: ViewStateType = {
  pizzasView: [],
  categoriesView: [],
}

export const viewReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case ViewActionType.fill: {
      return { ...state, ...payload }
    }
    default: {
      return state
    }
  }
}
