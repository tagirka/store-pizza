import { all, call, takeEvery } from "redux-saga/effects"
import { addCart } from "./workers/add-cart"
import { CartActionType } from "../types"
import { recalculateCart } from "./workers/recalculate-cart"
import { decCart } from "./workers/dec-cart"
import { incCart } from "./workers/inc-cart"
import { delCart } from "./workers/del-cart"

function* watchAddCart() {
  yield takeEvery(CartActionType.add, addCart)
}

function* watchRecalculateCart() {
  yield takeEvery(CartActionType.recalculate, recalculateCart)
}

function* watchDecCart() {
  yield takeEvery(CartActionType.dec, decCart)
}

function* watchIncCart() {
  yield takeEvery(CartActionType.inc, incCart)
}

function* watchDelCart() {
  yield takeEvery(CartActionType.del, delCart)
}

export function* watchCart() {
  yield all([
    call(watchAddCart),
    call(watchRecalculateCart),
    call(watchDecCart),
    call(watchIncCart),
    call(watchDelCart),
  ])
}
