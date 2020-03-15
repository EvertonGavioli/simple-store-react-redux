import React from 'react'
import PropTypes from 'prop-types'
import QuantitySelector from 'components/QuantitySelector'
import PrimaryButton from 'components/PrimaryButton'

import { Container, Imagem, InfoContainer, Descricao, Valor, Condicao } from './styles'

const CardProduct = (props) => {
  return (
    <Container
      onClick={props.onClick}
      selecionado={props.selecionado}
    >
      <Imagem src={props.urlImagem} alt={'Falha ao Carregar...'} />
      <InfoContainer
        selecionado={props.selecionado}
      >
        <Descricao>{props.descricao}</Descricao>
        <Valor>{props.valorFormatado}</Valor>
        <Condicao>{props.condicao}</Condicao>

        {props.selecionado && (
          <>
            <QuantitySelector
              onQuantityChanged={props.onQuantityChanged}
              quantity={props.quantity}
            />
            <PrimaryButton color={'primary'}>
              Adicionar
            </PrimaryButton>
          </>
        )}
      </InfoContainer>
    </Container>
  )
}

CardProduct.propTypes = {
  onClick: PropTypes.func.isRequired,
  onQuantityChanged: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
  urlImagem: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
  valorFormatado: PropTypes.string.isRequired,
  condicao: PropTypes.string.isRequired,
  selecionado: PropTypes.bool.isRequired
}

export default CardProduct
