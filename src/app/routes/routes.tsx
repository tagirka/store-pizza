import React from "react"
import { Route } from "react-router-dom"
import { pages } from "./books"

export const routes = () => {
  return pages.map((page) => {
    return <Route key={page.path} {...page} exact />
  })
}
