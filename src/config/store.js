import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import reduxThunk from 'redux-thunk'
import logger from 'redux-logger'

import productReducer from 'pages/Produto/reducer'

const reducers = combineReducers({
  product: productReducer,
  form: reduxFormReducer
})

const store = createStore(reducers, applyMiddleware(reduxThunk, logger))

export default store
