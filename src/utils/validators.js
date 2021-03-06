export function validateEmptyAndLength3(value) {
    if (!value)
        return 'Esse campo é obrigatório'
    if (value.length < 3)
        return 'Esse campo precisa ter no mínimo 3 caracteres'

    return true
}

export function validateEmptyAndEmail(value) {
    if (!value)
        return 'Essa campo é obrigatório'

    const isValid = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i.test(value)
    if (!isValid)
        return 'O email não é válido'

    return true
}