import { productActions } from 'config/actions'

export const resetProductState = dispatch => {
  dispatch({ type: productActions.RESET_PRODUCT })
}
