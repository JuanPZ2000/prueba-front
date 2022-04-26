import React from 'react'
import AppDataService from '../services/mongo.js'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const Home = () => {
  const [balance, setBalance] = React.useState('')
  const retrieveBalance = () => {
    try {
      var promise = AppDataService.getBalance()
      promise.then(result => setBalance(result.data.balance)).catch( err => alert("Error"));
    } catch (e) {
      console.error(
        `${e}`,
      )
    }
  } 
  return (
    <div style = {{
      justifyContent: 'center',
      alignText: 'center',
      alignItems: 'center',
      height:'90vh'
    }}>
      <center><h2>Bienvenido a la plataforma de inversiones!</h2></center>
      <h2>Haga click aqui para consultar su saldo</h2>
      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={() => {
            retrieveBalance();
            }}>Consultar saldo
        </Button>
      </Stack>
      <h2>${balance}</h2>
    </div>
  )
}

export default Home