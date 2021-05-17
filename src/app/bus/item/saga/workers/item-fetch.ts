import { SagaIterator } from "redux-saga"
import { put, apply } from "redux-saga/effects"

import { api, ApiResponseType } from "../../../../api/api"
import { ItemAction } from "../../actions"
import { ItemStateType } from "../../reducer"

export function* itemFetch(): SagaIterator {
  try {
    yield put(ItemAction.isLoaded(false))

    const response: ApiResponseType[] = yield apply(api, api.fetchData, [])

    const statusOK = response.filter(
      (res: ApiResponseType) => res.status === 200
    ).length

    if (statusOK !== response.length) return

    const result = response.reduce((arr, cur) => {
      return { ...arr, [cur.url]: cur.data }
    }, {} as ItemStateType)

    yield put(ItemAction.isLoaded(true))
    yield put(ItemAction.fill(result))
  } catch (e) {
    put(ItemAction.isError(true))
    throw new Error("fetch error")
  } finally {
    // stop fetch
  }
}
