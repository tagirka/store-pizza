import createSagaMiddleware from "redux-saga"
import { Middleware } from "redux"

const sagaMiddleware = createSagaMiddleware()
const middlewares: Middleware[] = [sagaMiddleware]

export { middlewares, sagaMiddleware }
