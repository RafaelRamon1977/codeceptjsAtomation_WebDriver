import { generate } from 'gerador-validador-cpf'

const cpfName = () => {
    var cpf = generate({ format: true })
    var cpfAndName = cpf + ' - Rafael Ramon'
    return cpfAndName
}

//export.cpfName = cpfName