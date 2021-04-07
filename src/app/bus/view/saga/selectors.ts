import { select } from "redux-saga/effects"
import { StateType } from "../../../init/rootReducer"

export const pizzasSelector = select((state: StateType) => state.item.pizzas)

export const viewSelectors = {
  pizzasViewSelect: (state: StateType) => state.view.pizzasView,
  categoriesViewSelect: (state: StateType) => state.view.categoriesView,
}
