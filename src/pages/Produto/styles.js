import styled from 'styled-components'

export const Container = styled.div`
  margin: 60px auto;
  max-width: 1140px;
`

export const ProductList = styled.ul`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  list-style: none;
`
