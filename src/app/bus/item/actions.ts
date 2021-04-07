import { ItemActionType } from "./types"

export const ItemAction = {
  // SYNC
  fill: (data: any) => ({ type: ItemActionType.fill, payload: data }),
  isLoaded: (data: boolean) => ({ type: ItemActionType.loaded, payload: data }),
  isError: (data: boolean) => ({ type: ItemActionType.error, payload: data }),
  // ASYNC
  fetch: (option: any = []) => ({
    type: ItemActionType.fetch,
    payload: option,
  }),
}
