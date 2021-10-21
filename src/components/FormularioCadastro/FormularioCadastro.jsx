import React, { useState } from 'react'
import DadosEntrega from './DadosEntrega'
import DadosPessoais from './DadosPessoais'
import DadosUsuario from './DadosUsuarios'

function FormularioCadastro({ aoEnviar, validarCpf }) {
  const [etapaAtual, setEtapaAtual] = useState(0)

  const formularios = [
    <DadosUsuario aoEnviar={proximo} />,
    <DadosPessoais aoEnviar={proximo} validarCpf={validarCpf} />,
    <DadosEntrega aoEnviar={proximo} />
  ]

  function proximo() {
    setEtapaAtual(etapaAtual + 1)
  }

  return <>{formularios[etapaAtual]}</>
}
//<DadosPessoais aoEnviar={aoEnviar} validarCpf={validarCpf} /> 1
//<DadosUsuario /> 0
//<DadosEntrega /> 2

export default FormularioCadastro
