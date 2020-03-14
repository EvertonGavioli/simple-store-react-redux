import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { theme } from 'config/styles'

const PrimaryButton = ({ color, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color={color}>
        {children}
      </Button>
    </ThemeProvider>
  )
}

PrimaryButton.propTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
}

export default PrimaryButton
