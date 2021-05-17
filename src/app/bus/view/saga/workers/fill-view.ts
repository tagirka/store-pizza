import { call, put, select } from "redux-saga/effects"
import { CATEGORIES_ON_VIEW, ITEMS_ON_VIEW } from "../../../../config/config"
import { CategoryType, PizzaType } from "../../../../types"

import { ViewAction } from "../../actions"
import { itemSelectors } from "../../../item/selectors"
import { SagaIterator } from "redux-saga"

export function* fillView(): SagaIterator {
  const pizzas: PizzaType[] = yield select(itemSelectors.pizzasSelect)
  const categories: CategoryType[] = yield select(
    itemSelectors.categoriesSelect
  )

  const pizzasView: (number | null)[] = yield call(getPizzasView, pizzas)

  const catView = pizzasView.reduce((acc, cur) => {
    const pizza = pizzas.find((p) => p.id === cur)
    const category = pizza ? pizza.category : null
    if (category !== null && !acc.includes(category)) {
      acc.push(category)
    }
    return acc
  }, [] as number[])

  const categoriesView = categories
    .reduce((acc, cur) => {
      if (!acc.includes(cur.id)) {
        acc.push(cur.id)
      }
      return acc
    }, catView)
    .slice(0, CATEGORIES_ON_VIEW)

  yield put(ViewAction.fill({ pizzasView, categoriesView }))
}

export const getPizzasView = (arr: PizzaType[]): (number | null)[] => {
  return arr
    .map((p) => {
      if (p.availableDepths.length === 0 || p.availableSizes.length === 0)
        return null

      return p.id
    })
    .slice(0, ITEMS_ON_VIEW)
}
