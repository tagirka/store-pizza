import { put, select } from "redux-saga/effects"
import { cartSelectors } from "../selectors"
import { CartItemType } from "../../../../types"
import { cartActions } from "../../actions"
import { getTotalCost } from "../utils"

export function* incCart({ payload: idCart }: any) {
  const items: CartItemType[] = yield select(cartSelectors.items)

  const idx = items.findIndex((item) => item.idCart === idCart)

  if (idx < 0) return

  let currentItem = items[idx]

  currentItem.count = currentItem.count + 1

  const cost: number = yield getTotalCost({
    idItem: items[idx].idItem,
    depth: items[idx].depth,
    size: items[idx].size,
  })
  currentItem.totalCost = currentItem.count * cost

  yield put(cartActions.recalculate({ items }))
}
