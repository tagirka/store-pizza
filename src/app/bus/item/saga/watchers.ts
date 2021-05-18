import { all, call, takeEvery } from "redux-saga/effects"
import { ItemActionEnum } from "../types"
import { itemFetch } from "./workers/item-fetch"
import { SagaIterator } from "redux-saga"
import { fillView } from "../../view/saga/workers/fill-view"

function* watchFillView(): SagaIterator {
  yield takeEvery(ItemActionEnum.fill, fillView)
}

function* watchItemFetch(): Generator {
  yield takeEvery(ItemActionEnum.fetch, itemFetch)
}

export function* watchItem(): Generator {
  yield all([call(watchItemFetch), call(watchFillView)])
}
