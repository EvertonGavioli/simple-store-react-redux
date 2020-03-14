import { productActions } from 'config/actions'

const INITIAL_STATE = {
  idSelectedProduct: null
}

export default function productReducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case productActions.CHANGED_PRODUCT:
      return { ...state, idSelectedProduct: action.payload }
    default:
      return state
  }
}
