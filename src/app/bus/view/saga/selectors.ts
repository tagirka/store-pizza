import { select } from "redux-saga/effects"
import { StateType } from "../../../init/rootReducer"

export type ViewSelectorType =
  | typeof viewSelectors.pizzasViewSelect
  | typeof viewSelectors.categoriesViewSelect

export const pizzasSelector = select((state: StateType) => state.item.pizzas)

export const viewSelectors = {
  pizzasViewSelect: (state: StateType): (number | null)[] =>
    state.view.pizzasView,
  categoriesViewSelect: (state: StateType): (number | null)[] =>
    state.view.categoriesView,
}
