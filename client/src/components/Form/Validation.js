export const required = value => (value || typeof value === 'number' ? undefined : 'Requis');

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Email invalide'
    : undefined

const maxLength = max => value =>
  value && value.length > max ? `${max} caractères maximum` : undefined
export const maxLength10 = maxLength(10)

const minLength = min => value =>
  value && value.length < min ? `${min} caractères minimum` : undefined
export const minLength2 = minLength(2)

export const number = value =>
  value && isNaN(Number(value)) ? 'Nombre invalide' : undefined

const minValue = min => value =>
  value && value < min ? `Valeur minimum : ${min}` : undefined
export const minValue1 = minValue(1)