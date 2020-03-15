import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #eceff1;
`

export const Container = styled.div`
  position: fixed;
  height: 467px;
  width: 364px;
  border-radius: 4px;
  background-color: #ffffff;
  
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 720px) {
    background-color: transparent;
  }
`

export const NomeContainer = styled.h2`
  margin-top: 64px;
  font-size: 24px;
  color: #546e7a;
  font-weight: 700;
  text-align: center;
`

export const TextoCompra = styled.h2`
  font-size: 17px;
  color: #546e7a;
  font-weight: 700;
  text-align: center;

  span {
    color: #019cdf;
  }
`

export const Image = styled.img`
  margin: 48px 78px 48px 128px;
  width: 158px;
  height: 131px;
`

export const NovaCompraContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`
