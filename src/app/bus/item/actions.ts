import { ItemActionEnum } from "./types"
import { ActionDataType } from "../../init/rootReducer"
import { ItemStateType } from "./reducer"

type ItemActionsType = {
  fill: (data: ItemStateType) => ActionDataType
  isLoaded: (data: boolean) => ActionDataType
  isError: (data: boolean) => ActionDataType
  fetch: (option?: [{ [key: string]: string }]) => ActionDataType
}

export const ItemAction: ItemActionsType = {
  // SYNC
  fill: (data: ItemStateType) => ({ type: ItemActionEnum.fill, payload: data }),
  isLoaded: (data: boolean) => ({ type: ItemActionEnum.loaded, payload: data }),
  isError: (data: boolean) => ({ type: ItemActionEnum.error, payload: data }),

  // ASYNC
  fetch: (option) => ({
    type: ItemActionEnum.fetch,
    payload: option,
  }),
}
