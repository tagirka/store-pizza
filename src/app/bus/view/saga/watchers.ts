import { all, call, takeEvery } from "redux-saga/effects"

import { fillView } from "./workers/fill-view"
import { ItemActionEnum } from "../../item/types"
import { ViewActionType } from "../types"
import { filterItems } from "./workers/filter-items"
import { SagaIterator } from "redux-saga"

function* watchFillView(): SagaIterator {
  yield takeEvery(ItemActionEnum.fill, fillView)
}

function* watchFilterItemCategory(): SagaIterator {
  yield takeEvery(ViewActionType.filterItemByCategory, filterItems)
}

export function* watchView(): SagaIterator {
  yield all([call(watchFillView), call(watchFilterItemCategory)])
}
