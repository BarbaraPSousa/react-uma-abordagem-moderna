import React, { useState } from 'react'
import DadosEntrega from './DadosEntrega'
import DadosPessoais from './DadosPessoais'
import DadosUsuario from './DadosUsuarios'

function FormularioCadastro({ aoEnviar, validarCpf }) {
  return (
    <>
      <DadosPessoais aoEnviar={aoEnviar} validarCpf={validarCpf} />
      <DadosUsuario />
      <DadosEntrega />
    </>
  )
}

export default FormularioCadastro
