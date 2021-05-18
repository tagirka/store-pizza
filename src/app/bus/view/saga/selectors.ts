import { StateType } from "../../../init/rootReducer"

export type ViewSelectorType =
  | typeof viewSelectors.pizzasViewSelect
  | typeof viewSelectors.categoriesViewSelect

export const viewSelectors = {
  pizzasViewSelect: (state: StateType): number[] => state.view.pizzasView,
  categoriesViewSelect: (state: StateType): number[] =>
    state.view.categoriesView,
}
