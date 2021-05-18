import { ViewActionType } from "./types"
import { ActionDataType } from "../../init/rootReducer"

export interface ViewStateType {
  pizzasView: number[]
  categoriesView: number[]
}

const initialState: ViewStateType = {
  pizzasView: [],
  categoriesView: [],
}

export const viewReducer = (
  state = initialState,
  { type, payload }: ActionDataType
): ViewStateType => {
  switch (type) {
    case ViewActionType.fill: {
      return { ...state, ...(payload as ViewStateType[]) }
    }
    case ViewActionType.filterItemByCategory:
      return state
    default: {
      return state
    }
  }
}
