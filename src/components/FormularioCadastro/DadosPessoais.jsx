import React, { useState } from 'react'
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core/'

export function DadosPessoais({ aoEnviar, validarCpf }) {
  const [nome, setNome] = useState('')
  const [sobreNome, setSobreNome] = useState('')
  const [cpf, setCpf] = useState('')
  const [promocoes, setPromocoes] = useState(true)
  const [novidades, setNovidades] = useState(false)

  const [error, setErros] = useState({ cpf: { valido: true, texto: '' } })

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        aoEnviar({ nome, sobreNome, cpf, promocoes, novidades })
      }}
    >
      <TextField
        value={nome}
        onChange={event => {
          setNome(event.target.value)
        }}
        id="nome"
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
        onBlur={event => {
          const ehValido = validarCpf(cpf)
          setErros({ cpf: ehValido })
        }}
        error={!error.cpf.valido}
        helperText={error.cpf.texto}
        id="cpf"
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
        Cadastra
      </Button>
    </form>
  )
}

export default DadosPessoais