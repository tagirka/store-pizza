import { useSelector } from "react-redux"
import { useEffect, useState } from "react"

import { ViewSelectorType } from "../bus/view/saga/selectors"

type UseGetViewType = (selector: ViewSelectorType) => [number[]]

export const useGetView: UseGetViewType = (selector) => {
  const view: ReturnType<typeof selector> = useSelector(selector)

  const [arrayView, setArrayView] = useState([] as number[])

  useEffect(() => {
    setArrayView(view)
  }, [view])

  return [arrayView]
}
