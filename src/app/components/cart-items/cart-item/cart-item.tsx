import React, { FC } from "react"
import { CartItemType, DepthType, PizzaType, SizeType } from "../../../types"
import CartItemRender from "./cart-item-render"
import { useDispatch, useSelector } from "react-redux"
import { itemSelectors } from "../../../bus/item/selectors"
import { CartActionType } from "../../../bus/cart/types"
import { cartActions } from "../../../bus/cart/actions"

type PropsType = {
  item: CartItemType
}

const CartItem: FC<PropsType> = ({ item }) => {
  const dispatch = useDispatch()
  const { count, totalCost, idItem, idCart, depth } = item

  const pizza = useSelector(itemSelectors.pizzaByIdSelect(idItem as number))

  const { title, image } = pizza as PizzaType

  const pizzaDepth = useSelector(itemSelectors.depthByIdSelect(depth))

  const { title: titleDepth } = pizzaDepth as DepthType

  const pizzaSize = useSelector(
    itemSelectors.sizeByIdSelect(item.size as number)
  )

  const { title: titleSize } = pizzaSize as SizeType

  const handleOnClick = (action: CartActionType) => {
    switch (action) {
      case CartActionType.dec: {
        return dispatch(cartActions.dec(idCart))
      }

      case CartActionType.inc: {
        return dispatch(cartActions.inc(idCart))
      }

      case CartActionType.del: {
        return dispatch(cartActions.del(idCart))
      }

      default: {
        return
      }
    }
  }

  return (
    <CartItemRender
      title={title}
      image={image}
      cost={totalCost as number}
      depth={titleDepth}
      size={titleSize}
      count={count as number}
      handleOnClick={handleOnClick}
    />
  )
}

export default CartItem
