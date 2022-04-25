import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'

const Navbar = () => {
  return (
    <>
        <Nav>
            <Bars />
            <NavBtn>
                <NavBtnLink to= "/">Inicio</NavBtnLink>
            </NavBtn>
            <NavBtn>
                <NavBtnLink to= "/suscribe">Suscribirse a un fondo</NavBtnLink>
            </NavBtn>
            <NavBtn>
                <NavBtnLink to= "/cancel">Cancelar un fondo</NavBtnLink>
            </NavBtn>
            <NavBtn>
                <NavBtnLink to= "/historical">Historial de transacciones</NavBtnLink>
            </NavBtn>
            <NavBtn>
                <NavBtnLink to= "/graph">Grafica de inversiones</NavBtnLink>
            </NavBtn>
        </Nav>
    </>
  )
}

export default Navbar