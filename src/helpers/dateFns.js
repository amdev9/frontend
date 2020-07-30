import { format, isValid } from 'date-fns/esm'
import ruLocale from 'date-fns/locale/ru'

const formatLocale = (date, formatStr) => {
  if (isValid(date)) {
    return format(date, formatStr, {
      locale: ruLocale,
    })
  } else {
    console.error(`Date is invalid: ${date}`, new Error())
  }
}

export { formatLocale as format }