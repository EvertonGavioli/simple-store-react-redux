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
  if (!product || product.quantity < 0) return

  const { cartProducts } = store.getState().product

  const index = cartProducts.findIndex(obj => obj.idProduct === product.idProduct)

  if (index >= 0) {
    cartProducts[index].quantity = product.quantity
    cartProducts[index].price = product.price
    cartProducts[index].total = product.price * product.quantity
  } else {
    cartProducts.push({
      idProduct: product.idProduct,
      quantity: product.quantity,
      price: product.price,
      total: product.price * product.quantity
    })
  }

  const updateTotal = cartProducts.reduce((acc, curr) => acc + curr.total, 0)

  dispatch({ type: productActions.ADD_PRODUCT_CART, payload: cartProducts })
  dispatch({ type: productActions.UPDATE_TOTAL, payload: updateTotal })
}
