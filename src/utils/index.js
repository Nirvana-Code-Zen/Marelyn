export const collectFormData = ($form) => {
  const data = {}
  const formData = new FormData($form)

  for (const keyName of formData.keys()) {
    data[keyName] = formData.get(keyName)
  }

  return data
}

export const validateData = (data, validationFormat) => {
  const dataMissing = {}
  for (const [key, value] of Object.entries(data)) {
    if (value === '' || value === undefined || value === null) {
      dataMissing[key] = `${key.split('_').join(' ')} es requerido`
      continue
    }

    if (!validationFormat[key].test(value)) {
      dataMissing[key] = `${key.split('_').join(' ')} formato incorrecto`
    }
  }

  return dataMissing
}
