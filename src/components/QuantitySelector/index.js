import React, { useState } from 'react'

import { Container, Button, Input } from './styles'

export default function QuantitySelector () {
  const [quantity, setQuantity] = useState(0)

  function removeButtonClick (event) {
    event.stopPropagation()
    if (quantity > 0) setQuantity(quantity - 1)
  }

  function addButtonClick (event) {
    event.stopPropagation()
    setQuantity(quantity + 1)
  }

  return (
    <Container>
      <Button onClick={event => removeButtonClick(event)}>
        <img src={'/assets/images/baseline-remove-24px.svg'} alt="" />
      </Button>

      <Input
        readOnly
        value={quantity}
      />

      <Button onClick={event => addButtonClick(event)}>
        <img src={'/assets/images/baseline-add-24px.svg'} alt="" />
      </Button>
    </Container>
  )
}
