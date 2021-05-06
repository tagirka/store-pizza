import React, { FC } from "react"

import StoreLayout from "../layouts/store-layout"
import StoreTop from "../components/store-top/store-top"
import StoreTitle from "../components/store-title/store-title"
import StoreItems from "../components/store-items/store-items"

import Loading from "../ui/loading/loading"
import { useFetchAllData } from "../hooks/useFetchAllData"

const StorePage: FC = () => {
  const [isLoading] = useFetchAllData()

  return (
    <StoreLayout>
      <div className="content">
        <div className="container">
          {!isLoading ? (
            <Loading />
          ) : (
            <>
              <StoreTop />
              <StoreTitle />
              <StoreItems />
            </>
          )}
        </div>
      </div>
    </StoreLayout>
  )
}

export default StorePage
