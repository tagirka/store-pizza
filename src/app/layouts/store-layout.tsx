import React from "react"
import Header from "../components/header/header"

const StoreLayout = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default StoreLayout
