import { call, put, select } from "redux-saga/effects"
import { cartSelectors } from "../selectors"
import { CartItemType } from "../../../../types"
import { cartActions } from "../../actions"
import { getTotalCost } from "../utils"
import { ActionDataType } from "../../../../init/rootReducer"
import { SagaIterator } from "redux-saga"

export function* incCart({ payload: idCart }: ActionDataType): SagaIterator {
  const items: CartItemType[] = yield select(cartSelectors.items)

  const idx = items.findIndex((item) => item.idCart === idCart)

  if (idx < 0) return

  const currentItem = items[idx]

  currentItem.count = currentItem.count + 1

  const cost: number = yield call(getTotalCost, {
    ...items[idx],
    idItem: items[idx].idItem,
    depth: items[idx].depth,
    size: items[idx].size,
  })
  currentItem.totalCost = currentItem.count * cost

  yield put(cartActions.recalculate({ items }))
}
