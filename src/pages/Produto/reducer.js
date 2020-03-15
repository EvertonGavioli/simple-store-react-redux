import { productActions } from 'config/actions'

const INITIAL_STATE = {
  idSelectedProduct: null,
  quantityProducts: [],
  cartProducts: []
}

export default function productReducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case productActions.CHANGED_PRODUCT:
      return { ...state, idSelectedProduct: action.payload }
    case productActions.CHANGED_QUANTITY:
      return { ...state, quantityProducts: action.payload }
    case productActions.ADD_PRODUCT_CART:
      return { ...state, cartProducts: action.payload }
    default:
      return state
  }
}
