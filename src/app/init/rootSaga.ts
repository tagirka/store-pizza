import { watchItem } from "../bus/item/saga/watchers"
import { all, call } from "redux-saga/effects"
import { watchView } from "../bus/view/saga/watchers"
import { watchCart } from "../bus/cart/saga/watchers"

export function* rootSaga(): Generator {
  yield all([call(watchItem), call(watchView), call(watchCart)])
}
