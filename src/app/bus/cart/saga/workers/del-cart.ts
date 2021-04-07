import { put, select } from "redux-saga/effects"
import { cartSelectors } from "../selectors"
import { CartItemType } from "../../../../types"
import { cartActions } from "../../actions"

export function* delCart({ payload: idCart }: any) {
  const items: CartItemType[] = yield select(cartSelectors.items)

  const newItems = items.filter((item) => item.idCart !== idCart)

  yield put(cartActions.recalculate({ items: newItems }))
}
