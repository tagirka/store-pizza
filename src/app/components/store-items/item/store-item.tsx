import React, { FC } from "react"
import DepthSelect from "./block-selectors/depth-select"
import SizeSelect from "./block-selectors/size-select"
import BlockBtn from "./block-btn/block-btn"

import { useGetItemById } from "../../../hooks/useGetItemById"
import { itemSelectors } from "../../../bus/item/selectors"
import { PizzaType } from "../../../types"
import {
  ActiveItemType,
  useSetActiveItem,
} from "../../../hooks/useSetActiveItem"

import { useCountItemCart } from "../../../hooks/useCountItemCart"

type PropsType = {
  viewId: number
  children?: never
}

const StoreItem: FC<PropsType> = ({ viewId }) => {
  const [itemStore] = useGetItemById<PizzaType>(
    viewId,
    itemSelectors.pizzaByIdSelect
  )
  const { availableSizes, availableDepths, id, image, title } = itemStore

  const [countInCart] = useCountItemCart(id)

  const initialActiveItemState: ActiveItemType = {
    depth: availableDepths.length !== 0 ? availableDepths[0] : null,
    size: availableSizes.length !== 0 ? availableSizes[0] : null,
    count: countInCart,
  }

  const [activeItem, setActiveItem] = useSetActiveItem(initialActiveItemState)

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={image} alt={title} />
      <h4 className="pizza-block__title">{title}</h4>
      <div className="pizza-block__selector">
        <DepthSelect
          itemStore={itemStore}
          active={activeItem}
          setActive={setActiveItem}
        />
        <SizeSelect
          itemStore={itemStore}
          active={activeItem}
          setActive={setActiveItem}
        />
      </div>
      <BlockBtn
        itemStore={itemStore}
        active={activeItem}
        setActive={setActiveItem}
      />
    </div>
  )
}

StoreItem.defaultProps = { viewId: 0 }

export default StoreItem
