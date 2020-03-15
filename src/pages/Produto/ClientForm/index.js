import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { theme } from 'config/styles'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'

import Header from 'components/Header'

import { Container, Form } from './styles'

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 180
  }
}))

const validate = values => {
  const errors = {}
  const requiredFields = [
    'Nome',
    'Email',
    'Sexo'
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Campo Obrigatório'
    }
  })
  if (
    values.Email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)
  ) {
    errors.Email = 'Email inválido'
  }
  return errors
}

const InputName = ({ input, label, meta: { touched, invalid, error }, ...custom }) => {
  return (
    <ThemeProvider theme={theme}>
      <TextField
        {...input}
        {...custom}
        label={label}
        placeholder={label}
        error={touched && invalid}
        helperText={touched && error}

        required
        fullWidth
        variant={'outlined'}
        className={useStyles().root}
        id="outlined-basic-input-name"
      />
    </ThemeProvider>
  )
}

const InputEmail = ({ input, label, meta: { touched, invalid, error }, ...custom }) => {
  return (
    <ThemeProvider theme={theme}>
      <TextField
        {...input}
        {...custom}
        label={label}
        placeholder={label}
        error={touched && invalid}
        helperText={touched && error}

        required
        fullWidth
        variant={'outlined'}
        className={useStyles().root}
        id="outlined-basic-input-email"
      />
    </ThemeProvider>
  )
}

const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {

  } else {
    return <FormHelperText>{touched && error}</FormHelperText>
  }
}

const InputSelect = ({ input, label, meta: { touched, error }, ...custom }) => {
  return (
    <ThemeProvider theme={theme}>
      <FormControl
        variant="outlined"
        className={useStyles().formControl}
        error={Boolean(touched) && Boolean(error)}
      >
        <InputLabel
          required
          htmlFor="outlined-basic-input-sexo">
          Selecione
        </InputLabel>
        <Select
          {...input}
          {...custom}

          native
          autoWidth
          labelWidth={85}
          inputProps={{
            name: 'sexo',
            id: 'outlined-basic-input-sexo'
          }}
        >
          <option value="" />
          <option value={'Masculino'}>Masculino</option>
          <option value={'Feminino'}>Feminino</option>
        </Select>
        {renderFromHelper({ touched, error })}
      </FormControl>
    </ThemeProvider>
  )
}

const ClientForm = props => {
  return (
    <Container>
      <Header title={'Dados do Cliente'} />

      <Form>
        <Field component={InputName} name="Nome" label={'Nome'} placeholder={'Nome do cliente aqui'} />
        <Field component={InputEmail} name="Email" label={'Email'} placeholder={'Digite seu email aqui'} />
        <Field component={InputSelect} name="Sexo" label={'Sexo'} />
      </Form>
    </Container>
  )
}

export default reduxForm({
  form: 'clientForm',
  validate
})(ClientForm)
