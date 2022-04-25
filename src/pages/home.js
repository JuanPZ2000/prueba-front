import React from 'react'
const saldo = 50000 
const Home = () => {
  return (
    <div style = {{
      justifyContent: 'center',
      alignText: 'center',
      alignItems: 'center',
      height:'90vh'
    }}>
      <center><h2>Bienvenido!</h2></center>
      <h2>Actualmente su saldo es: {saldo}</h2>
    </div>
  )
}

export default Home