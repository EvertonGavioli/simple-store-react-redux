import React from 'react'
import PropTypes from 'prop-types'

import {
  Container,
  Title
} from './styles'

const Header = (props) => {
  return (
    <Container>
      <Title>{props.title}</Title>
    </Container>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
