import { productActions } from 'config/actions'

export const setIdSelectedProduct = idProduct => dispatch => {
  dispatch({ type: productActions.CHANGED_PRODUCT, payload: idProduct })
}
