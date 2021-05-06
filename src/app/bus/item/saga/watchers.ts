import { all, call, takeEvery } from "redux-saga/effects"
import { ItemActionEnum } from "../types"
import { itemFetch } from "./workers/item-fetch"

function* watchItemFetch(): Generator {
  yield takeEvery(ItemActionEnum.fetch, itemFetch)
}

export function* watchItem(): Generator {
  yield all([call(watchItemFetch)])
}
