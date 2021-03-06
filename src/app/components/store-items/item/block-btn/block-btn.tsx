import React, { FC } from "react"
import { ActiveItemType } from "../../../../hooks/useSetActiveItem"
import { cartActions } from "../../../../bus/cart/actions"
import { CartItemType, PizzaType } from "../../../../types"
import { useDispatch } from "react-redux"

type PropsType = {
  itemStore: PizzaType
  active: ActiveItemType
  setActive: (id: ActiveItemType) => void
}

const BlockBtn: FC<PropsType> = ({ itemStore, active, setActive }) => {
  const dispatch = useDispatch()
  const { depth, size, count } = active
  const { id, cost } = itemStore

  const idCart = `${id}-${depth ?? 0}-${size ?? 0}`

  const handleBtn = () => {
    setActive({ ...active, count: ++active.count })

    const itemCart: CartItemType = {
      idCart,
      idItem: id,
      cost,
      depth,
      size,
      count: 1,
    }

    dispatch(cartActions.add(itemCart))
  }

  return (
    <div className="pizza-block__bottom">
      <div className="pizza-block__price">от {cost} ₽</div>
      <div className="button button--outline button--add" onClick={handleBtn}>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
            fill="white"
          />
        </svg>
        <span>Добавить</span>
        <i className={count === 0 ? "hidden" : ""}>{count}</i>
      </div>
    </div>
  )
}

export default BlockBtn
