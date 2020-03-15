import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 80px;
`

export const Form = styled.form`
  display: grid;
  grid-gap: 10px;
  margin-top: 24px;

  @media screen and (max-width: 720px) {
    grid-template-columns: repeat(auto-fit, 1fr);
  }

  @media screen and (min-width: 720px) and (max-width: 1140px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }  

  @media screen and (min-width: 1140px) {
    grid-template-columns: 2fr 2fr 1fr;
  }
`
