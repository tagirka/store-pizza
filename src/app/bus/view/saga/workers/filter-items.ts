import { PizzaType } from "../../../../types"
import { call, put, select } from "redux-saga/effects"
import { itemSelectors } from "../../../item/selectors"
import { getPizzasView } from "./fill-view"
import { ViewAction } from "../../actions"
import { ActionDataType } from "../../../../init/rootReducer"
import { SagaIterator } from "redux-saga"
import { viewSelectors } from "../selectors"

export function* filterItems({ payload }: ActionDataType): SagaIterator {
  const pizzas: PizzaType[] = yield select(
    itemSelectors.pizzaByCategorySelect(payload as number)
  )

  const categoriesView = yield select(viewSelectors.categoriesViewSelect)

  const pizzasView = yield call(getPizzasView, pizzas)

  yield put(ViewAction.fill({ pizzasView, categoriesView }))
}
