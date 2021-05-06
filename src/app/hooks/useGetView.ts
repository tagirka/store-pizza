import { useSelector } from "react-redux"
import { useEffect, useState } from "react"

import { ViewSelectorType } from "../bus/view/saga/selectors"

type UseGetViewType = (selector: ViewSelectorType) => [number[]]

export const useGetView: UseGetViewType = (selector): [number[]] => {
  const view: number[] = useSelector(selector)

  const [arrayView, setArrayView] = useState([] as number[])

  useEffect(() => {
    setArrayView(view)
  }, [view])

  return [arrayView]
}
