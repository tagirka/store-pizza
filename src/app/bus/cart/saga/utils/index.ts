import { DepthType, PizzaType, SizeType } from "../../../../types"
import { select } from "redux-saga/effects"
import { itemSelectors } from "../../../item/selectors"

export const round = (data: number) => {
  return +data.toFixed(2)
}

export function* getTotalCost({ idItem, depth, size }: any) {
  const { cost }: PizzaType = yield select(
    itemSelectors.pizzaByIdSelect(idItem)
  )
  const { ratioCost: ratioCostSize }: SizeType = yield select(
    itemSelectors.sizeByIdSelect(size)
  )

  const { ratioCost: ratioCostDepth }: DepthType = yield select(
    itemSelectors.depthByIdSelect(depth)
  )
  return round(cost * ratioCostDepth * ratioCostSize)
}
