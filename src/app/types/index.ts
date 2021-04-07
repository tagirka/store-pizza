interface DataType {
  id: number
  title: string
}

export interface PizzaType extends DataType {
  category: number
  image: string
  cost: number
  availableDepths: number[]
  availableSizes: number[]
}

export interface CategoryType extends DataType {}

export interface DepthType extends DataType {
  ratioCost: number
}

export interface DepthViewType extends DepthType {
  visible: boolean
}

export interface SizeType extends DataType {
  ratioCost: number
}

export interface SizeViewType extends SizeType {
  visible: boolean
}

export interface CartItemType {
  idCart: string
  idItem: number | null
  cost: number
  depth: number | null
  size: number | null
  count: number
  totalCost?: number
}
