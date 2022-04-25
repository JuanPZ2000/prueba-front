import React from 'react'
import MyDropdown from '../components/Dropdown/dropdown'

const Suscribe = () => {
  return (
    <div>
        <center><h2>Suscribirse a un nuevo fondo</h2></center>
        <h3>Por favor elija el nuevo fondo al que se quiere suscribir</h3>
        <MyDropdown></MyDropdown>
        <br></br>
        <h3>Tenga en cuenta los montos minimos para invertir en cada fondo</h3>
        <table class="default">
            <tr>
                <td><center>Nombre</center></td>
                <td>Monto minimo de vinculacion</td>
            </tr>
            <tr>
                <td><center>FPV_BTG_PACTUAL_RECAUDADORA</center></td>
                <td><center>$75000</center></td>
            </tr>
            <tr>
                <td><center>FPV_BTG_PACTUAL_ECOPETROL</center></td>
                <td><center>$125000</center></td>
            </tr>
            <tr>
                <td><center>DEUDAPRIVADA</center></td>
                <td><center>$50000</center></td>
            </tr>
            <tr>
                <td><center>FDO-ACCIONES</center></td>
                <td><center>$250000</center></td>
            </tr>
            <tr>
                <td><center>FPV_BTG_PACTUAL_DINAMICA</center></td>
                <td><center>$100000</center></td>
            </tr>
        </table>
    </div>
  )
}

export default Suscribe