import React from 'react'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { theme } from 'config/styles'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  root: {
    color: 'white'
  }
}))

const PrimaryButton = ({ color, children, ...rest }) => {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <Button {...rest} variant="contained" color={color} className={classes.root}>
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
