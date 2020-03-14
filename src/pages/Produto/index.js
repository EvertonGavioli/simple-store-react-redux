import React, { useState, useEffect } from 'react'
import { Container, ProductList } from './styles'
import { productsData } from 'config/MockProducts'
import { useSelector, useDispatch } from 'react-redux'
import Header from 'components/Header'
import CardProduct from 'components/CardProduct'
import * as productActions from './actions'

export default function Produto () {
  const dispatch = useDispatch()
  const idSelectedProduct = useSelector(state => state.product.idSelectedProduct)

  const [products, setProducts] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setProducts(productsData)
    }, 1500)
  }, [])

  function cardProductClick (idProduto) {
    dispatch(productActions.setIdSelectedProduct(idProduto))
  }

  return (
    <Container>
      <Header title='Produtos' />
      <ProductList>
        {products.map(product => (
          <li key={product.idProduto}>
            <CardProduct
              onClick={() => cardProductClick(product.idProduto)}
              urlImagem={product.urlImagem}
              descricao={product.descricao}
              valorFormatado={product.valorFormatado}
              condicao={product.condicao}
              selecionado={product.idProduto === idSelectedProduct}
            />
          </li>
        ))}
      </ProductList>
    </Container>
  )
}
