function validarCpf(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: 'CPF deve te 11 digitos' }
  } else {
    return { valido: true, texto: '' }
  }
}

function validarSenha(senha) {
  if (senha.length < 8 || senha.length > 50) {
    return { valido: false, texto: 'Senha deve ter 8 e 50 digitos' }
  } else {
    return { valido: true, texto: '' }
  }
}

function validarNome(nome) {
  if (nome.length < 4 || nome.length > 100) {
    return { valido: false, texto: 'Nome deve ter 4 e 50 digitos' }
  } else {
    return { valido: true, texto: '' }
  }
}
export { validarCpf, validarSenha, validarNome }
