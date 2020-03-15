import { productActions } from 'config/actions'

const INITIAL_STATE = {
  idSelectedProduct: null,
  quantityProducts: [],
  cartProducts: [],
  totalProducts: 0
}

export default function productReducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case productActions.CHANGED_PRODUCT:
      return { ...state, idSelectedProduct: action.payload }
    case productActions.CHANGED_QUANTITY:
      return { ...state, quantityProducts: action.payload }
    case productActions.ADD_PRODUCT_CART:
      return { ...state, cartProducts: action.payload }
    case productActions.UPDATE_TOTAL:
      return { ...state, totalProducts: action.payload }
    case productActions.RESET_PRODUCT:
      return {
        ...state,
        idSelectedProduct: null,
        quantityProducts: [],
        cartProducts: [],
        totalProducts: 0
      }
    default:
      return state
  }
}
