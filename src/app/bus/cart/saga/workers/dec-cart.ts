import { put, select } from "redux-saga/effects"
import { cartSelectors } from "../selectors"
import { CartItemType } from "../../../../types"
import { getTotalCost } from "../utils"
import { cartActions } from "../../actions"

export function* decCart({ payload: idCart }: any) {
  const items: CartItemType[] = yield select(cartSelectors.items)
  const idx = items.findIndex((c) => c.idCart === idCart)

  if (idx < 0) return

  const currentItem = items[idx]
  currentItem.count = currentItem.count - 1 > 0 ? currentItem.count - 1 : 0

  const cost: number = yield getTotalCost({
    idItem: currentItem.idItem,
    depth: currentItem.depth,
    size: currentItem.size,
  })

  currentItem.totalCost = currentItem.count * cost

  yield put(cartActions.recalculate({ items }))
}
