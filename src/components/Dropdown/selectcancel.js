import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AppDataService from '../../services/mongo.js'
import { alertTitleClasses } from '@mui/material';

export default function BasicSelect() {
  const [fund, setFund] = React.useState('');


  const handleChange = (event) => {
    setFund(event.target.value);
  };
  
  const statusCheck = (status) => {
    if (status == 200){
      alert('Fondo cancelado, se le ha devuelto el dinero de su inversion')
    }
    if (status == 202){
      alert('Usted no tiene inversiones en este fondo')
    }
  }

  const clickButton = (event) => {
    var data = {
      fund : fund
    }
    console.log(data)
    try {
      var promise = AppDataService.cancelFund(data)
      promise.then(result => statusCheck(result.status)).catch( err => alert("No se ha diligenciado un campo"));
    } catch (e) {
      console.error(
        `${e}`,
      )
    }
    setFund('')
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Fondo</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={fund}
          label="Fondo"
          onChange={handleChange}
        >
          <MenuItem value={"FPV_BTG_PACTUAL_RECAUDADORA"}>FPV_BTG_PACTUAL_RECAUDADORA</MenuItem>
          <MenuItem value={"FPV_BTG_PACTUAL_ECOPETROL"}>FPV_BTG_PACTUAL_ECOPETROL</MenuItem>
          <MenuItem value={"DEUDAPRIVADA"}>DEUDAPRIVADA</MenuItem>
          <MenuItem value={"FDO-ACCIONES"}>FDO-ACCIONES</MenuItem>
          <MenuItem value={"FPV_BTG_PACTUAL_DINAMICA"}>FPV_BTG_PACTUAL_DINAMICA</MenuItem>
        </Select>
      </FormControl>
      <br></br>
      <br></br>
      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={() => {
            clickButton();
            }}>Cancelar
        </Button>
      </Stack>
    </Box>
  );
}