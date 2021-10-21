import { Step, StepLabel, Stepper } from '@material-ui/core'
import { typography } from '@material-ui/system'
import React, { useEffect, useState } from 'react'
import DadosEntrega from './DadosEntrega'
import DadosPessoais from './DadosPessoais'
import DadosUsuario from './DadosUsuarios'

function FormularioCadastro({ aoEnviar, validarCpf }) {
  const [etapaAtual, setEtapaAtual] = useState(0)
  const [dadosColetados, setDados] = useState({})

  useEffect(() => {
    if (etapaAtual === formularios.length - 1) {
      aoEnviar(dadosColetados)
    }
  })

  const formularios = [
    <DadosUsuario aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados} validarCpf={validarCpf} />,
    <DadosEntrega aoEnviar={coletarDados} />,
    <typography variant="h5">Obrigado pelo Cadastro</typography>
  ]

  function coletarDados(dados) {
    setDados({ ...dadosColetados, ...dados })
    proximo()
  }

  function proximo() {
    setEtapaAtual(etapaAtual + 1)
  }

  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {formularios[etapaAtual]}
    </>
  )
}
//<DadosPessoais aoEnviar={aoEnviar} validarCpf={validarCpf} /> 1
//<DadosUsuario /> 0
//<DadosEntrega /> 2

export default FormularioCadastro
