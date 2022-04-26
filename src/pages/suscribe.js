import React from 'react'
import BasicSelect from '../components/dropdown/selectmui.js'
import BasicTable from '../components/Table/table.js'


const Suscribe = () => {
  return (
    <div>
        <center><h2>Suscribirse a un nuevo fondo</h2></center>
        <h3>Por favor elija el nuevo fondo al que se quiere suscribir</h3>
        <BasicSelect></BasicSelect>
        <br></br>
        <h3>Tenga en cuenta los montos minimos para invertir en cada fondo</h3>
        <BasicTable></BasicTable>
    </div>
  )
}

export default Suscribe