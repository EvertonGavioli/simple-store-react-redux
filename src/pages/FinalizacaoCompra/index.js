import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import NovaCompraButtom from 'components/PrimaryButton'
import * as productActions from './actions'

import {
  Wrapper,
  Container,
  NomeContainer,
  TextoCompra,
  Image,
  NovaCompraContainer
} from './styles'

export default function FinalizacaoCompra (props) {
  const dispatch = useDispatch()

  const [redirect, setRedirect] = useState(false)
  const { NomeCliente, ValorCompra } = props.location.state ? props.location.state : ''

  function novaCompra () {
    dispatch(productActions.resetProductState)
    setRedirect(true)
  }

  return (
    <Wrapper>
      <Container>
        {redirect && <Redirect to="/" />}
        <NomeContainer>
          {NomeCliente},
        </NomeContainer>
        <TextoCompra>
          Sua compra no valor de <span>{ValorCompra}</span><br />
          foi finalizada com sucesso
        </TextoCompra>
        <Image src="/assets/images/purchase.png" />
        <NovaCompraContainer>
          <NovaCompraButtom
            onClick={() => novaCompra()}
            color="secondary"
          >
            iniciar nova compra
          </NovaCompraButtom>
        </NovaCompraContainer>
      </Container>
    </Wrapper>
  )
}
