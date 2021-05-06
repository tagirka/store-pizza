import { applyMiddleware, createStore } from "redux"
import { rootReducer } from "./rootReducer"
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly"
import { middlewares, sagaMiddleware } from "./middlewares"
import { rootSaga } from "./rootSaga"

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
)

sagaMiddleware.run(rootSaga)
