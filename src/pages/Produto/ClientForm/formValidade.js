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

export default validate
