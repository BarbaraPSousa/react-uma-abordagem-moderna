import React, { useState, useContext } from 'react'
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core/'
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro'

export function DadosPessoais({ aoEnviar }) {
  const [nome, setNome] = useState('')
  const [sobreNome, setSobreNome] = useState('')
  const [cpf, setCpf] = useState('')
  const [promocoes, setPromocoes] = useState(true)
  const [novidades, setNovidades] = useState(false)

  const [erros, setErros] = useState({
    cpf: { valido: true, texto: '' },
    nome: { valido: true, texto: '' }
  })
  const validacoes = useContext(ValidacoesCadastro)//utilizando o contexto de validações
  function validarCampos(event) {
    const { name, value } = event.target
    const novoEstado = { ...erros }
    novoEstado[name] = validacoes[name](value)
    setErros(novoEstado)
  }

  function possoEnviar() {
    for (let campo in erros) {
      if (!erros[campo].valido) {
        return false
      }
    }
    return true
  }
  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        if (possoEnviar()) {
          aoEnviar({ nome, sobreNome, cpf, promocoes, novidades })
        }
      }}
    >
      <TextField
        value={nome}
        onChange={event => {
          setNome(event.target.value)
        }}
        onBlur={validarCampos}
        error={!erros.nome.valido}
        helperText={erros.nome.texto}
        id="nome"
        name="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        value={sobreNome}
        onChange={event => {
          setSobreNome(event.target.value)
        }}
        id="sobreNome"
        name="sobreNome"
        label="SobreNome"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        value={cpf}
        onChange={event => {
          setCpf(event.target.value)
        }}
        onBlur={validarCampos}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="cpf"
        name="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        value={promocoes}
        label="Promoções"
        control={
          <Switch
            checked={promocoes}
            onChange={event => {
              setPromocoes(event.target.checked) //controla o switch
            }}
            name="promocoes"
            color="primary"
          />
        }
      />
      <FormControlLabel
        value={novidades}
        label="Novidades"
        control={
          <Switch
            checked={novidades}
            onChange={event => {
              setNovidades(event.target.checked) //controla o switch
            }}
            name="novidades"
            color="primary"
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  )
}

export default DadosPessoais
