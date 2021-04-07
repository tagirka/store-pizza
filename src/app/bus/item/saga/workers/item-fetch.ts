import { put } from "redux-saga/effects"

import { api } from "../../../../api/api"
import { ItemAction } from "../../actions"

export function* itemFetch() {
  try {
    yield put(ItemAction.isLoaded(false))
    const response: any[] = yield api.fetchData()

    const statusOK = response.filter((res) => res.status === 200).length

    if (statusOK !== response.length) return

    const result = response.reduce((arr, cur) => {
      return { ...arr, [cur.url]: cur.data }
    }, {})

    yield put(ItemAction.isLoaded(true))
    yield put(ItemAction.fill(result))
  } catch (e) {
    put(ItemAction.isError(true))
    throw new Error("fetch error")
  } finally {
  }
}
