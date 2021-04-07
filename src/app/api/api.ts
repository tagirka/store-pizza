import axios from "axios"
import { BASE_URL } from "../config/config"

const urlsTable = {
  pizzas: "pizzas",
  categories: "categories",
  sizes: "sizes",
  depths: "depths",
}

export const urls = Object.values(urlsTable)

export const api = {
  fetch: (url: string, option = {}) => {
    const requestOptions = {
      ...option,
      headers: {
        Authorization: "token",
      },
    }
    return axios(`${BASE_URL}${url}`, requestOptions)
  },

  fetchData: () => {
    const response = urls.map((url) => api.fetch(url))
    return Promise.all(response).then((res) =>
      res.map((r, i) => ({
        url: urls[i],
        status: r.status,
        data: r.data,
      }))
    )
  },
}
