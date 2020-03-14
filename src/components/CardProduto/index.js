import React from 'react'
import PropTypes from 'prop-types'

import { Container, Imagem, Descricao, Valor, Condicao } from './styles'

const CardProduto = (props) => {
  return (
    <Container>
      <Imagem src={props.urlImagem} alt={'Falha ao Carregar...'} />
      <Descricao>{props.descricao}</Descricao>
      <Valor>{props.valorFormatado}</Valor>
      <Condicao>{props.condicao}</Condicao>
    </Container>
  )
}

CardProduto.propTypes = {
  urlImagem: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
  valorFormatado: PropTypes.string.isRequired,
  condicao: PropTypes.string.isRequired
}

export default CardProduto
