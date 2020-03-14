import React, { useState, useEffect } from 'react'
import Header from 'components/Header'
import CardProduto from 'components/CardProduto'

import { Container, ProductList } from './styles'

import { productsData } from 'config/MockProducts'

export default function Produto () {
  const [products, setProducts] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setProducts(productsData)
    }, 1500)
  }, [])

  return (
    <Container>
      <Header title='Produtos' />
      <ProductList>
        {products.map(product => (
          <li key={product.idProduto}>
            <CardProduto
              urlImagem={product.urlImagem}
              descricao={product.descricao}
              valorFormatado={product.valorFormatado}
              condicao={product.condicao}
            />
          </li>
        ))}
      </ProductList>
    </Container>
  )
}
