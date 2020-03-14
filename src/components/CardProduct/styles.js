import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 380px;
  width: 270px;
  padding: 0px 9px;
  background-color: #fff;

  ${props => props.selecionado && css`
    border-radius: 4px;
    filter: drop-shadow(0px 3px 2.5px rgba(0,0,0,0.1));
    border: 1px solid #eceff1;
  `}
`

export const Imagem = styled.img`
  align-self: center;
  margin-top: 16px;
  width: 237px;
  height: 237px;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${props => props.selecionado && css`
    position: relative; 
    background-color: #fff;
    opacity: 0.75;
    bottom: 125px;
  `}
`

export const Descricao = styled.span`
  margin-top: 12px;
  font-size: 14px;
  max-height: 36px;
  color: #546e7a;
  font-weight: 400;  
`

export const Valor = styled.span`
  margin-top: 14px;
  font-size: 18px;
  max-height: 18px;
  color: #546e7a;
  font-weight: 700;
`

export const Condicao = styled.span`
  margin-top: 14px;
  font-size: 12px;
  max-height: 36px;
  color: #90a4ae;
  font-weight: 400;
  white-space: pre-wrap;
`
