import { StateType } from "../../init/rootReducer"

import { CategoryType, DepthType, PizzaType, SizeType } from "../../types"

export type ItemByIdSelectorsType =
  | typeof itemSelectors.pizzaByIdSelect
  | typeof itemSelectors.categoryByIdSelect
  | typeof itemSelectors.depthByIdSelect
  | typeof itemSelectors.sizeByIdSelect

export const itemSelectors = {
  pizzasSelect: (state: StateType): PizzaType[] => state.item.pizzas,
  categoriesSelect: (state: StateType): CategoryType[] => state.item.categories,
  isLoadedSelect: (state: StateType): boolean | undefined =>
    state.item.isLoaded,
  isErrorSelect: (state: StateType): boolean | undefined => state.item.isError,
  depthsSelect: (state: StateType): DepthType[] => state.item.depths,
  sizesSelect: (state: StateType): SizeType[] => state.item.sizes,

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

  depthByIdSelect: (id: number | null) => (
    state: StateType
  ): DepthType | null => {
    const depth = state.item.depths.find((d: DepthType) => d.id === id)
    if (depth === undefined) return null
    return depth
  },

  sizeByIdSelect: (id: number | null) => (
    state: StateType
  ): SizeType | null => {
    const size = state.item.sizes.find((s: SizeType) => s.id === id)

    if (size === undefined || size === null) return null

    return size
  },
}
