import { ItemActionEnum } from "./types"

type ItemActionType = {
  type: ItemActionEnum
  payload?: any
  error?: boolean
}

type ItemActionsType = {
  fill: (data: any) => ItemActionType
  isLoaded: any
  isError: any
  setError: any
  fetch: any
}

export const ItemAction: ItemActionsType = {
  // SYNC
  fill: (data: any) => ({ type: ItemActionEnum.fill, payload: data }),
  isLoaded: (data: boolean) => ({ type: ItemActionEnum.loaded, payload: data }),
  isError: (data: boolean) => ({ type: ItemActionEnum.error, payload: data }),
  // ??
  setError: () => ({ type: ItemActionEnum.error, error: true }),
  // ASYNC
  fetch: (option: any = []) => ({
    type: ItemActionEnum.fetch,
    payload: option,
  }),
}
