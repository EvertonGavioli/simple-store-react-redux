import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 380px;
  width: 270px;
  background-color: #fff;
`

export const Imagem = styled.img`
  align-self: center;
  width: 237px;
  height: 237px;
`

export const Descricao = styled.span`
  margin-top: 16px;
  margin-left: 18px;
  font-size: 14px;
  line-height: 18px;
  color: #546e7a;
  font-weight: 400;  
`

export const Valor = styled.span`
  margin-top: 14px;
  margin-left: 18px;
  font-size: 18px;
  line-height: 18px;
  color: #546e7a;
  font-weight: 700;
`

export const Condicao = styled.span`
  margin-top: 13px;
  margin-left: 18px;
  font-size: 12px;
  line-height: 18px;
  color: #90a4ae;
  font-weight: 400;
  white-space: pre-wrap;
`
