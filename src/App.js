import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/home'
import Suscribe from './pages/suscribe'
import Cancel from './pages/cancel'
import Graph from './pages/Graph'
import Historical from './pages/historical'




class App extends Component {
    render() {
      const myStyle={
          backgroundImage: "url('https://static.poder360.com.br/2022/02/logo-btg-848x477.png')",
          height:'100vh',
          fontSize:'15px',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
      };
      return (
        <div style={myStyle}>
            <Router>
              <Navbar />
              <Switch>
                <Route path='/' exact component = {Home} />
                <Route path='/Graph' exact component = {Graph} />
                <Route path='/Historical' exact component = {Historical} />
                <Route path='/cancel' exact component = {Cancel} />
                <Route path='/suscribe' exact component = {Suscribe} />
              </Switch>
            </Router>
        </div>
      );
    }
  }
     
  export default App;