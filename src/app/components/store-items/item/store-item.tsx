import React, { useEffect, useState } from "react"
import DepthSelect from "./block-selectors/depth-select"
import SizeSelect from "./block-selectors/size-select"
import BlockBtn from "./block-btn/block-btn"
import { useDispatch, useSelector } from "react-redux"
import { itemSelectors } from "../../../bus/item/selectors"
import { PizzaType } from "../../../types"

import { cartActions } from "../../../bus/cart/actions"

interface Props {
  viewId: number
}

const StoreItem = ({ viewId }: Props) => {
  const dispatch = useDispatch()
  const itemStore = useSelector(
    itemSelectors.pizzaByIdSelect(viewId)
  ) as PizzaType

  const { availableSizes, availableDepths, cost } = itemStore

  const [activeDepth, setActiveDepth] = useState(
    availableDepths.length !== 0 ? availableDepths[0] : null
  )

  const [activeSize, setActiveSize] = useState(
    availableSizes.length !== 0 ? availableSizes[0] : null
  )

  const [activeCount, setActiveCount] = useState(0)

  const getIdCart = ({ viewId, activeDepth, activeSize }: any) => {
    return `${viewId}-${activeDepth}-${activeSize}`
  }

  const [idCart, setIdCart] = useState(() =>
    getIdCart({ viewId, activeDepth, activeSize })
  )

  const [activePizza, setActivePizza] = useState({
    idItem: viewId,
    cost,
    size: activeSize,
    depth: activeDepth,
    count: null as null | number,
  })

  const handleBtn = () => {
    setActiveCount((prev) => ++prev)

    setActivePizza({
      idItem: viewId,
      cost,
      size: activeSize,
      depth: activeDepth,
      count: 1,
    })

    setIdCart(() => getIdCart({ viewId, activeDepth, activeSize }))
  }

  useEffect(() => {
    if (!Boolean(activePizza.count)) return
    dispatch(cartActions.add({ idCart, ...activePizza }))
  }, [activePizza, idCart, dispatch])

  return (
    <div className="pizza-block">
      <img
        className="pizza-block__image"
        src={itemStore.image}
        alt={itemStore.title}
      />
      <h4 className="pizza-block__title">{itemStore.title}</h4>
      <div className="pizza-block__selector">
        <DepthSelect
          itemStore={itemStore}
          active={activeDepth}
          setActive={setActiveDepth}
        />
        <SizeSelect
          itemStore={itemStore}
          active={activeSize}
          setActive={setActiveSize}
        />
      </div>
      <BlockBtn
        handleBth={handleBtn}
        cost={+cost.toFixed(2)}
        count={activeCount}
      />
    </div>
  )
}

export default StoreItem
