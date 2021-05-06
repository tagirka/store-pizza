import React, { FC, ReactNode } from "react"
import Header from "../components/header/header"

type PropsType = {
  children: ReactNode
}

const StoreLayout: FC<PropsType> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default StoreLayout
