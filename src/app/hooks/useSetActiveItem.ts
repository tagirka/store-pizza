import { useCallback, useState } from "react"

export type ActiveItemType = {
  depth: number | null
  size: number | null
  count: number
}

type UseSetActiveItemType = (
  item: ActiveItemType
) => [ActiveItemType, (item: ActiveItemType) => void]

const initialState: ActiveItemType = { depth: 0, size: 0, count: 0 }

export const useSetActiveItem: UseSetActiveItemType = (item = initialState) => {
  const [activeItem, setActiveItem] = useState(item)

  useCallback(() => {
    setActiveItem(item)
  }, [item])

  return [activeItem, setActiveItem]
}
