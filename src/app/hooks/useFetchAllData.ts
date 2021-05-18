import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { itemSelectors } from "../bus/item/selectors"
import { ItemAction } from "../bus/item/actions"

export const useFetchAllData: () => boolean[] = () => {
  const dispatch = useDispatch()

  const isLoading = useSelector(itemSelectors.isLoadedSelect)

  useEffect(() => {
    dispatch(ItemAction.fetch())
  }, [dispatch])

  return [isLoading]
}
