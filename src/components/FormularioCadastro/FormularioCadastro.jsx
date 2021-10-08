import React, { useState } from 'react'
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core/'

function FormularioCadastro() {
  const [nome, setNome] = useState('')
  const [sobreNome, setSobreNome] = useState('')
  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        console.log(nome, sobreNome)
      }}
    >
      <TextField
        value={nome}
        onChange={event => {
          let tmpNome = event.target.value
          if (tmpNome.length >= 3) {
            tmpNome = tmpNome.substring(0, 3)
          }
          setNome(tmpNome)
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
        id="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        control={<Switch name="promocoes" defaultChecked color="primary" />}
      />
      <FormControlLabel
        label="Novidades"
        control={<Switch name="novidades" defaultChecked color="primary" />}
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastra
      </Button>
    </form>
  )
}

export default FormularioCadastro
