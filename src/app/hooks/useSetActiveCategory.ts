import { useCallback, useState } from "react"
import { useDispatch } from "react-redux"
import { ViewAction } from "../bus/view/actions"

type UseSetActiveCategoryType = (id: number) => [number, (id: number) => void]

export const useSetActiveCategory: UseSetActiveCategoryType = (id: number) => {
  const dispatch = useDispatch()
  const [item, setItem] = useState(id)

  useCallback(() => {
    setItem(id)
    dispatch(ViewAction.filter(id))
  }, [id, dispatch])

  return [item, setItem]
}
