import { StateType } from "../../init/rootReducer"

import { CategoryType, DepthType, PizzaType, SizeType } from "../../types"

export type ItemByIdSelectorsType =
  | typeof itemSelectors.pizzaByIdSelect
  | typeof itemSelectors.categoryByIdSelect
  | typeof itemSelectors.depthByIdSelect
  | typeof itemSelectors.sizeByIdSelect

export type ItemAllSelectorsType =
  | typeof itemSelectors.pizzasSelect
  | typeof itemSelectors.categoriesSelect
  | typeof itemSelectors.depthsSelect
  | typeof itemSelectors.sizesSelect
  | typeof itemSelectors.isLoadedSelect
  | typeof itemSelectors.isErrorSelect

export const itemSelectors = {
  pizzasSelect: (state: StateType) => state.item.pizzas,
  categoriesSelect: (state: StateType) => state.item.categories,
  isLoadedSelect: (state: StateType) => state.item.isLoaded,
  isErrorSelect: (state: StateType) => state.item.isError,

  //select by ID
  pizzaByIdSelect: (id: number) => (state: StateType): PizzaType | null => {
    const pizza = state.item.pizzas.find((p: PizzaType) => p.id === id)
    if (pizza === undefined) return null

    return pizza
  },
  pizzaByCategorySelect: (id = 0) => (
    state: StateType
  ): PizzaType | PizzaType[] => {
    return id === 0
      ? state.item.pizzas
      : state.item.pizzas.filter((p: PizzaType) => p.category === id)
  },
  categoryByIdSelect: (id = 0) => (
    state: StateType
  ): CategoryType | CategoryType[] | null => {
    if (id === 0) return state.item.categories
    const category = state.item.categories.find(
      (c: CategoryType) => c.id === id
    )
    if (category === undefined) return null

    return category
  },

  depthsSelect: (state: StateType) => state.item.depths,
  depthByIdSelect: (id: number | null) => (
    state: StateType
  ): DepthType | null => {
    const depth = state.item.depths.find((d: DepthType) => d.id === id)
    if (depth === undefined) return null
    return depth
  },

  sizesSelect: (state: StateType) => state.item.sizes,
  sizeByIdSelect: (id: number | null) => (state: StateType) => {
    const size = state.item.sizes.find((s: SizeType) => s.id === id)

    if (size === undefined || size === null) return null

    return size
  },
}
