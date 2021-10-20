import { Button, TextField } from '@material-ui/core'
import React, { Component } from 'react'

function DadosEntrega() {
  return (
    <form>
      <TextField
        id="cep"
        label="Cep"
        type="number"
        variant="outlined"
        margin="normal"
      />

      <TextField
        id="endereço"
        label="Endeço"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        id="numero"
        label="Numero"
        type="number"
        variant="outlined"
        margin="normal"
      />

      <TextField
        id="estado"
        label="estado"
        type="text"
        variant="outlined"
        margin="normal"
      />

      <TextField
        id="cidade"
        label="Cidade"
        type="text"
        variant="outlined"
        margin="normal"
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar cadastro
      </Button>
    </form>
  )
}

export default DadosEntrega
