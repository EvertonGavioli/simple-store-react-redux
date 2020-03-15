import React from 'react'
import { Field, reduxForm } from 'redux-form'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'
import Header from 'components/Header'
import validate from './formValidade'

import {
  Container,
  Form
} from './styles'

const InputName = ({ input, label, meta: { touched, invalid, error }, ...custom }) => {
  return (
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
      id="outlined-basic-input-name"
    />
  )
}

const InputEmail = ({ input, label, meta: { touched, invalid, error }, ...custom }) => {
  return (
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
      id="outlined-basic-input-email"
    />
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
    <FormControl
      variant="outlined"
      error={Boolean(touched) && Boolean(error)}
    >
      <InputLabel
        required
        htmlFor="outlined-basic-input-sexo">
        Sexo
      </InputLabel>
      <Select
        {...input}
        {...custom}

        native
        autoWidth
        labelWidth={50}
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
