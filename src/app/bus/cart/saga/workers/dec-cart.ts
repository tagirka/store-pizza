import { call, put, select } from "redux-saga/effects"
import { cartSelectors } from "../selectors"
import { CartItemType } from "../../../../types"
import { getTotalCost } from "../utils"
import { cartActions } from "../../actions"
import { ActionDataType } from "../../../../init/rootReducer"
import { SagaIterator } from "redux-saga"

export function* decCart({ payload: idCart }: ActionDataType): SagaIterator {
  const items: CartItemType[] = yield select(cartSelectors.items)
  const idx = items.findIndex((c) => c.idCart === idCart)

  if (idx < 0) return

  const currentItem = items[idx]
  currentItem.count = currentItem.count - 1 > 0 ? currentItem.count - 1 : 0

  const cost: number = yield call(getTotalCost, {
    ...currentItem,
    idItem: currentItem.idItem,
    depth: currentItem.depth,
    size: currentItem.size,
  })

  currentItem.totalCost = currentItem.count * cost

  yield put(cartActions.recalculate({ items }))
}
