import React from "react"
import { Route } from "react-router-dom"
import { pages } from "./books"

export const routes: () => JSX.Element[] = () => {
  return pages.map((page) => <Route key={page.path} {...page} exact />)
}
