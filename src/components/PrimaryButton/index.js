import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { theme } from 'config/styles'

const useStyles = makeStyles(theme => ({
  root: {
    color: 'white'
  }
}))

const PrimaryButton = ({ color, children }) => {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color={color} className={classes.root}>
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
