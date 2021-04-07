import { all, call, takeEvery } from "redux-saga/effects"
import { ItemActionType } from "../types"
import { itemFetch } from "./workers/item-fetch"

function* watchItemFetch() {
  yield takeEvery(ItemActionType.fetch, itemFetch)
}

export function* watchItem() {
  yield all([call(watchItemFetch)])
}
