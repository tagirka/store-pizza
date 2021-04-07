import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { ItemAction } from "../bus/item/actions"
import StoreLayout from "../layouts/store-layout"
import StoreTop from "../components/store-top/store-top"
import StoreTitle from "../components/store-title/store-title"
import StoreItems from "../components/store-items/store-items"
import { itemSelectors } from "../bus/item/selectors"
import Loading from "../ui/loading/loading"

const StorePage = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(itemSelectors.isLoadedSelect)

  useEffect(() => {
    dispatch(ItemAction.fetch())
  }, [dispatch])

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
