import { call, put, select } from "redux-saga/effects"
import { cartActions } from "../../actions"
import { CartItemType } from "../../../../types"
import { cartSelectors } from "../selectors"

import { getTotalCost } from "../utils"
import { SagaIterator } from "redux-saga"
import { ActionDataType } from "../../../../init/rootReducer"

export function* addCart({ payload }: ActionDataType): SagaIterator {
  const cartItems: CartItemType[] = yield select(cartSelectors.items)
  const totalCost: number = yield call(getTotalCost, payload as CartItemType)

  const items: CartItemType[] = [
    ...cartItems,
    { ...(payload as CartItemType), totalCost },
  ]

  yield put(cartActions.recalculate({ items }))
}
