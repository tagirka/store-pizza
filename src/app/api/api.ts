import axios, { AxiosPromise } from "axios"
import { BASE_URL } from "../config/config"

const urlsTable = {
  pizzas: "pizzas",
  categories: "categories",
  sizes: "sizes",
  depths: "depths",
}

export const urls = Object.values(urlsTable)

type FetchDataType<T> = () => Promise<T>

export type ApiResponseType = {
  url: string
  status: number
  data: unknown
}

export type ApiType = {
  fetch: (url: string, option: any) => AxiosPromise
  fetchData: FetchDataType<ApiResponseType[]>
}

export const api: ApiType = {
  fetch: async (url: string, option) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const requestOptions = {
      ...option,
      headers: {
        Authorization: "token",
      },
    }
    return axios(`${BASE_URL}${url}`, requestOptions)
  },

  fetchData: async (): Promise<ApiResponseType[]> => {
    const option = {}
    const response = urls.map((url) => api.fetch(url, option))
    return await Promise.all(response).then((res) =>
      res.map((r, i) => ({
        url: urls[i],
        status: r.status,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        data: r.data,
      }))
    )
  },
}
