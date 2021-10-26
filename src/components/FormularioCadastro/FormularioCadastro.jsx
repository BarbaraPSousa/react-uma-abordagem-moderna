import React, { useEffect, useState } from 'react'
import DadosPessoais from './DadosPessoais'
import DadosUsuario from './DadosUsuarios'
import DadosEntrega from './DadosEntrega'
import { typography, Step, StepLabel, Stepper } from '@material-ui/core'

function FormularioCadastro({ aoEnviar, validacoes }) {
  const [etapaAtual, setEtapaAtual] = useState(0)
  const [dadosColetados, setDados] = useState({})

  useEffect(() => {
    if (etapaAtual === formularios.length - 1) {
      aoEnviar(dadosColetados)
    }
  })

  const formularios = [
    <DadosUsuario aoEnviar={coletarDados} validacoes={validacoes} />,
    <DadosPessoais aoEnviar={coletarDados} validacoes={validacoes} />,
    <DadosEntrega aoEnviar={coletarDados} validacoes={validacoes} />,
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
