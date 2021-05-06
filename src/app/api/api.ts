import axios, { AxiosPromise, AxiosResponse } from "axios"
import { BASE_URL } from "../config/config"

import { PizzaType } from "../types"

const urlsTable = {
  pizzas: "pizzas",
  categories: "categories",
  sizes: "sizes",
  depths: "depths",
}

export const urls = Object.values(urlsTable)

type FetchDataType<T> = () => Promise<T>

type ResponseType = {
  url: string
  status: number
  data: any
}

export type ApiType = {
  fetch: (url: string, option: {}) => AxiosPromise
  fetchData: FetchDataType<ResponseType[]>
}

export const api: ApiType = {
  fetch: async (url: string, option = {}) => {
    const requestOptions = {
      ...option,
      headers: {
        Authorization: "token",
      },
    }
    const response = await axios(`${BASE_URL}${url}`, requestOptions)
    return response
  },

  fetchData: async () => {
    const option = {}
    const response = urls.map((url) => api.fetch(url, option))
    return await Promise.all(response).then((res) =>
      res.map((r, i) => ({
        url: urls[i],
        status: r.status,
        data: r.data,
      }))
    )
  },
}
