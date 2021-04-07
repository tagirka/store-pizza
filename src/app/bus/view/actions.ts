import { ViewActionType } from "./types"

export const ViewAction = {
  fill: (data: any) => ({ type: ViewActionType.fill, payload: data }),
  filter: (id: number) => ({
    type: ViewActionType.filterItemByCategory,
    payload: id,
  }),
}
