import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { productsData } from 'config/MockProducts'
import { useSelector, useDispatch } from 'react-redux'
import { FormatCurrencyBRL } from 'config/utils'
import Header from 'components/Header'
import CardProduct from 'components/CardProduct'
import ClientForm from './ClientForm'
import FinalizarButton from 'components/PrimaryButton'
import * as productActions from './actions'

import { Container, ProductList, FooterContainer, Total } from './styles'

export default function Produto () {
  const dispatch = useDispatch()
  const [products, setProducts] = useState([])
  const [redirect, setRedirect] = useState(false)

  const { idSelectedProduct, quantityProducts, totalProducts } = useSelector(state => state.product)
  const { clientForm } = useSelector(state => state.form)
  const currentQuantity = quantityProducts.find(obj => obj.idProduct === idSelectedProduct)
  const quantity = currentQuantity ? currentQuantity.quantity : 0

  useEffect(() => {
    setProducts(productsData)
  }, [])

  function cardProductClick (idProduto) {
    dispatch(productActions.setIdSelectedProduct(idProduto))
  }

  function quantityProductChanged (value) {
    dispatch(productActions.setQuantity(value))
  }

  function adicionarClick (event) {
    event.stopPropagation()
    const produto = products.find(obj => obj.idProduto === idSelectedProduct)

    const product = {
      idProduct: idSelectedProduct,
      quantity: quantity,
      price: produto.valor
    }

    dispatch(productActions.addProductOnCart(product))
  }

  function finalizarClick () {
    if ((clientForm && clientForm.syncErrors) || totalProducts <= 0) return
    setRedirect(true)
  }

  return (
    <Container>
      {redirect && <Redirect to={
        {
          pathname: '/finalizar',
          state: {
            NomeCliente: clientForm.values.Nome,
            ValorCompra: FormatCurrencyBRL(totalProducts)
          }
        }}
      />}

      <Header title='Produtos' />
      <ProductList>
        {products.map(product => (
          <li key={product.idProduto}>
            <CardProduct
              onCardClick={() => cardProductClick(product.idProduto)}
              onAdicionarClick={adicionarClick}
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
        <Total>Total: {FormatCurrencyBRL(totalProducts)}</Total>
        <FinalizarButton onClick={finalizarClick} color="secondary">
          Finalizar Compra
        </FinalizarButton>
      </FooterContainer>
    </Container>
  )
}
