import React, { useState } from 'react'
import DadosPessoais from './DadosPessoais'
import DadosUsuario from './DadosUsuarios'

function FormularioCadastro({ aoEnviar, validarCpf }) {
  return (
    <>
      <DadosPessoais aoEnviar={aoEnviar} validarCpf={validarCpf} />
      <DadosUsuario />
    </>
  )
}

export default FormularioCadastro
