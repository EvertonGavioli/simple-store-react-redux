export function FormatCurrencyBRL (value) {
  return Number(value).toLocaleString('pt-BR',
    {
      style: 'currency',
      currency: 'BRL'
    })
}
