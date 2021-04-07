import { PizzaType } from "../../../../types"
import { put, select } from "redux-saga/effects"
import { itemSelectors } from "../../../item/selectors"
import { getPizzasView } from "./fill-view"
import { ViewAction } from "../../actions"

export function* filterItems({ payload }: any) {
  const pizzas: PizzaType[] = yield select(
    itemSelectors.pizzaByCategorySelect(payload)
  )

  const pizzasView = getPizzasView(pizzas)

  yield put(ViewAction.fill({ pizzasView }))
}
