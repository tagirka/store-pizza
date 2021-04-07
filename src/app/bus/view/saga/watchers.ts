import { all, call, takeEvery } from "redux-saga/effects"

import { fillView } from "./workers/fill-view"
import { ItemActionType } from "../../item/types"
import { ViewActionType } from "../types"
import { filterItems } from "./workers/filter-items"

function* watchFillView() {
  yield takeEvery(ItemActionType.fill, fillView)
}

function* watchFilterItemCategory() {
  yield takeEvery(ViewActionType.filterItemByCategory, filterItems)
}

export function* watchView() {
  yield all([call(watchFillView), call(watchFilterItemCategory)])
}
