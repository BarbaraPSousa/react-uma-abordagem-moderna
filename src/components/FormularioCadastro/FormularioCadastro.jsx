import { typography } from '@material-ui/system'
import React, { useState } from 'react'
import DadosEntrega from './DadosEntrega'
import DadosPessoais from './DadosPessoais'
import DadosUsuario from './DadosUsuarios'

function FormularioCadastro({ aoEnviar, validarCpf }) {
  const [etapaAtual, setEtapaAtual] = useState(1)

  function formularioAtual(etapa) {
    switch (etapa) {
      case 0:
        return <DadosUsuario />
      case 1:
        return <DadosPessoais aoEnviar={aoEnviar} validarCpf={validarCpf} />
      case 2:
        return <DadosEntrega />
      default:
        return <typography>Error ao seleciona Formulário</typography>
    }
  }

  return <>{formularioAtual(etapaAtual)}</>
}
//<DadosPessoais aoEnviar={aoEnviar} validarCpf={validarCpf} /> 1
//<DadosUsuario /> 0
//<DadosEntrega /> 2
export default FormularioCadastro
