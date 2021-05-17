import { ViewActionType } from "./types"
import { ViewStateType } from "./reducer"
import { ActionDataType } from "../../init/rootReducer"

type ViewActionsType = {
  fill: (data: ViewStateType) => ActionDataType
  filter: (id: number) => ActionDataType
}

export const ViewAction: ViewActionsType = {
  fill: (data) => ({ type: ViewActionType.fill, payload: data }),
  filter: (id) => ({
    type: ViewActionType.filterItemByCategory,
    payload: id,
  }),
}
