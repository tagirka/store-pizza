import { useSelector } from "react-redux"
import { ItemByIdSelectorsType } from "../bus/item/selectors"

type UseGetItemByIdType = <T>(
  id: number,
  selector: ItemByIdSelectorsType
) => [T]

export const useGetItemById: UseGetItemByIdType = (
  id: number,
  selector: ItemByIdSelectorsType
) => {
  const itemStore = useSelector(selector(id))

  return [itemStore]
}
