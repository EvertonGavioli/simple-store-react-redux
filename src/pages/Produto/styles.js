import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1140px;
  
  @media screen and (max-width: 720px) {
    margin: 24px;
  }

  @media screen and (min-width: 720px) and (max-width: 1140px) {
    margin: 32px auto;
  }  

  @media screen and (min-width: 1140px) {
    margin: 64px auto;
  }

`

export const ProductList = styled.ul`
  margin-top: 50px;
  display: grid;
  grid-gap: 20px;
  justify-items: center;
  list-style: none;
  
  @media screen and (max-width: 720px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (min-width: 720px) and (max-width: 1140px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 12px;
  }  

  @media screen and (min-width: 1140px) {
    grid-template-columns: repeat(4, 1fr);
  }

`

export const FooterContainer = styled.div`
  margin: 80px 8px;
  display: flex;
  flex-direction: column;
  float: right;
  min-width: 200px;
`

export const Total = styled.span`
  font-size: 24px;
  line-height: 18px;
  color: #546e7a;
  font-weight: 700;
  margin-bottom: 14px;
`
