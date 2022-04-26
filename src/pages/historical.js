import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AppDataService from '../services/mongo.js'

const Historical = () => {
  const [historical, setHistorical] = React.useState('')
  
  const retrieveHistorical = () => {
    try {
      var promise = AppDataService.getHistorical()
      promise.then(result => setHistorical(result.data.historical)).catch( err => console.log(err));
      } catch (e) {
      console.error(
        `${e}`,
      )
    }
  } 
  const saveFile = () => {
    try {
      console.log(historical)
      const element = document.createElement("a");
      const file = new Blob([JSON.stringify(historical)], {
        type: "text/plain"
      });
      element.href = URL.createObjectURL(file);
      element.download = "transactions.txt";
      document.body.appendChild(element);
      element.click();
      } catch (e) {
      console.error(
        `${e}`,
      )
    }
  } 
  return (
    <div>
      <h2><center>HISTORICO DE TRANSACCIONES</center></h2>
      <h2>Por favor primero cargue el historico antes de descargarlo</h2>
      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={() => {
            retrieveHistorical();
            }}>Cargar historico
        </Button>
        <Button variant="contained" onClick={() => {
            saveFile();
            }}>Descargar historico de transacciones
        </Button>
      </Stack>
    </div>
  )
}

export default Historical