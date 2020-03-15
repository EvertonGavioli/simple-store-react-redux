import React from 'react'
import PropTypes from 'prop-types'

import { Container, Button, Input } from './styles'

const QuantitySelector = (props) => {
  const { quantity } = props

  function removeButtonClick (event) {
    event.stopPropagation()

    if (quantity > 0) {
      props.onQuantityChanged(quantity - 1)
    }
  }

  function addButtonClick (event) {
    event.stopPropagation()

    props.onQuantityChanged(quantity + 1)
  }

  return (
    <Container>
      <Button onClick={event => removeButtonClick(event)}>
        <img src={'/assets/images/baseline-remove-24px.svg'} alt="" />
      </Button>

      <Input
        readOnly
        value={props.quantity}
      />

      <Button onClick={event => addButtonClick(event)}>
        <img src={'/assets/images/baseline-add-24px.svg'} alt="" />
      </Button>
    </Container>
  )
}

QuantitySelector.propTypes = {
  quantity: PropTypes.number.isRequired,
  onQuantityChanged: PropTypes.func.isRequired
}

QuantitySelector.defaultProps = {
  quantity: 0
}

export default QuantitySelector
