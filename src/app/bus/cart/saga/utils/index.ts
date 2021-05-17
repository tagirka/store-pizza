import { CartItemType, DepthType, PizzaType, SizeType } from "../../../../types"
import { select } from "redux-saga/effects"
import { itemSelectors } from "../../../item/selectors"
import { SagaIterator } from "redux-saga"

export const round = (data: number): number => {
  return +data.toFixed(2)
}

export function* getTotalCost({
  idItem,
  depth,
  size,
}: CartItemType): SagaIterator {
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

  // yield call(round, cost * ratioCostDepth * ratioCostSize)
}
