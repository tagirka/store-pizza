import { StateType } from "../../init/rootReducer"
import { CategoryType, DepthType, PizzaType, SizeType } from "../../types"

export const itemSelectors = {
  pizzasSelect: (state: StateType) => state.item.pizzas,
  categoriesSelect: (state: StateType) => state.item.categories,
  isLoadedSelect: (state: StateType) => state.item.isLoaded,
  isErrorSelect: (state: StateType) => state.item.isError,

  //select by ID
  pizzaByIdSelect: (id: number) => (state: StateType) => {
    const pizza = state.item.pizzas.find((p: PizzaType) => p.id === id)
    if (pizza === undefined) return null

    return pizza
  },
  pizzaByCategorySelect: (id = 0) => (state: StateType) => {
    return id === 0
      ? state.item.pizzas
      : state.item.pizzas.filter((p: PizzaType) => p.category === id)
  },
  categoryByIdSelect: (id = 0) => (state: StateType) => {
    return id === 0
      ? state.item.categories
      : state.item.categories.find((c: CategoryType) => c.id === id)
  },

  depthsSelect: (state: StateType) => state.item.depths,
  depthByIdSelect: (id: number) => (state: StateType) => {
    const depth = state.item.depths.find((d: DepthType) => d.id === id)
    if (depth === undefined) return null
    return depth
  },

  sizesSelect: (state: StateType) => state.item.sizes,
  sizeByIdSelect: (id: number) => (state: StateType) => {
    const size = state.item.sizes.find((s: SizeType) => s.id === id)

    if (size === undefined) return null
    return size
  },
}
