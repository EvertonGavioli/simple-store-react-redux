import { productActions } from 'config/actions'
import store from 'config/store'

export const setIdSelectedProduct = idProduct => dispatch => {
  dispatch({ type: productActions.CHANGED_PRODUCT, payload: idProduct })
}

export const setQuantity = quantity => dispatch => {
  const { idSelectedProduct, quantityProducts } = store.getState().product

  const index = quantityProducts.findIndex(obj => obj.idProduct === idSelectedProduct)

  if (index >= 0) {
    quantityProducts[index].quantity = quantity
  } else {
    quantityProducts.push({
      idProduct: idSelectedProduct,
      quantity
    })
  }

  dispatch({ type: productActions.CHANGED_QUANTITY, payload: quantityProducts })
}

export const addProductOnCart = product => dispatch => {
  console.log(product)
  // dispatch({ type: productActions.ADD_PRODUCT_CART, payload: cartProducts })
}
