import { put } from "redux-saga/effects"
import { cartActions } from "../../actions"
import { CartStateType } from "../../reducer"
import { CartItemType } from "../../../../types"
import { round } from "../utils"

export function* recalculateCart({ payload }: any) {
  const { items } = payload as CartStateType

  const calcItems = items.reduce(
    (recalculates: CartItemType[], cur: CartItemType, idx, array) => {
      const ndx = recalculates.findIndex((a) => cur.idCart === a.idCart)
      if (ndx > -1) return recalculates

      const filtered = array.filter((a) => a.idCart === cur.idCart)

      const sum = filtered.reduce(
        (acc, cur) => {
          if (cur.totalCost === null || cur.totalCost === undefined) return acc
          if (cur.count === null || cur.count === undefined) return acc

          const totalCost = round(cur.totalCost + acc.totalCost)
          const count = cur.count + acc.count

          return { totalCost, count }
        },
        { totalCost: 0, count: 0 }
      )

      // recalculates = [...recalculates, { ...cur, totalCost: sum.totalCost, count: sum.count }]

      return [
        ...recalculates,
        { ...cur, totalCost: sum.totalCost, count: sum.count },
      ]
    },
    [] as CartItemType[]
  )

  const total = calcItems.reduce(
    (acc, cur) => {
      if (cur.totalCost === null || cur.totalCost === undefined) return acc
      if (cur.count === null || cur.count === undefined) return acc
      return {
        totalSum: round(acc.totalSum + cur.totalCost),
        totalCount: round(acc.totalCount + cur.count),
      }
    },
    { totalSum: 0, totalCount: 0 }
  )

  const cart: CartStateType = {
    items: calcItems,
    total,
  }

  yield put(cartActions.fill(cart))
}
