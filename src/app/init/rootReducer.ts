import { combineReducers } from "redux"
import { itemReducer as item } from "../bus/item/reducer"
import { viewReducer as view } from "../bus/view/reducer"
import { cartReducer as cart } from "../bus/cart/reducer"

type rootReducerType = typeof rootReducer
export type StateType = ReturnType<rootReducerType>
export const rootReducer = combineReducers({ item, view, cart })
