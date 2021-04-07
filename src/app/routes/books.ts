import { FunctionComponent } from "react"

import CartPage from "../pages/cart-page"
import StorePage from "../pages/store-page"

enum booksType {
  root = "/",
  store = "/store",
  cart = "/cart",
  login = "/login",
  logout = "/logout",
  admin = "/admin",
}

interface PageType {
  path: booksType
  component: FunctionComponent
  loader: () => void
}

export const pages: PageType[] = [
  {
    path: booksType.root,
    component: StorePage,
    loader: () => console.log(),
  },
  {
    path: booksType.store,
    component: StorePage,
    loader: () => console.log(),
  },

  {
    path: booksType.cart,
    component: CartPage,
    loader: () => console.log(),
  },
]
