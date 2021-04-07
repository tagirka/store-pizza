import { put, select } from "redux-saga/effects"
import { cartActions } from "../../actions"
import { CartItemType } from "../../../../types"
import { cartSelectors } from "../selectors"

import { getTotalCost } from "../utils"

export function* addCart({ payload }: any) {
  const cartItems: CartItemType[] = yield select(cartSelectors.items)
  const totalCost: number = yield getTotalCost(payload)

  const items: CartItemType[] = [...cartItems, { ...payload, totalCost }]

  yield put(cartActions.recalculate({ items }))
}
