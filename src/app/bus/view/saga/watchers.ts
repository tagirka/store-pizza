import { all, call, takeEvery } from "redux-saga/effects"

import { ViewActionType } from "../types"
import { filterItems } from "./workers/filter-items"
import { SagaIterator } from "redux-saga"

function* watchFilterItemCategory(): SagaIterator {
  yield takeEvery(ViewActionType.filterItemByCategory, filterItems)
}

export function* watchView(): SagaIterator {
  yield all([call(watchFilterItemCategory)])
}
