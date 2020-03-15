import React, { useState, useEffect } from 'react'
import { productsData } from 'config/MockProducts'
import { useSelector, useDispatch } from 'react-redux'
import Header from 'components/Header'
import CardProduct from 'components/CardProduct'
import ClientForm from './ClientForm'
import FinalizarButton from 'components/PrimaryButton'
import * as productActions from './actions'

import { Container, ProductList, FooterContainer, Total } from './styles'

export default function Produto () {
  const dispatch = useDispatch()
  const { idSelectedProduct, quantityProducts } = useSelector(state => state.product)
  const currentQuantity = quantityProducts.find(obj => obj.idProduct === idSelectedProduct)
  const quantity = currentQuantity ? currentQuantity.quantity : 0

  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(productsData)
  }, [])

  function cardProductClick (idProduto) {
    dispatch(productActions.setIdSelectedProduct(idProduto))
  }

  function quantityProductChanged (value) {
    dispatch(productActions.setQuantity(value))
  }

  return (
    <Container>
      <Header title='Produtos' />
      <ProductList>
        {products.map(product => (
          <li key={product.idProduto}>
            <CardProduct
              onClick={() => cardProductClick(product.idProduto)}
              onQuantityChanged={quantityProductChanged}
              quantity={quantity}
              urlImagem={product.urlImagem}
              descricao={product.descricao}
              valorFormatado={product.valorFormatado}
              condicao={product.condicao}
              selecionado={product.idProduto === idSelectedProduct}
            />
          </li>
        ))}
      </ProductList>

      <ClientForm />

      <FooterContainer>
        <Total>Total: R$ 0,00</Total>
        <FinalizarButton color="secondary">
          Finalizar Compra
        </FinalizarButton>
      </FooterContainer>
    </Container>
  )
}
