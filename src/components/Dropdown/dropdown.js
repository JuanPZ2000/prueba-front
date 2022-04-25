import React, {useState} from 'react';


class MyDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {fondo: 'FPV_BTG_PACTUAL_RECAUDADORA',
                  value: 0};
    this.handleChange = this.handleChange.bind(this);
    this.handleInvertionChange = this.handleInvertionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({fondo: event.target.value});
  }
  handleInvertionChange(event){
    this.setState({value: event.target.value});
  }

  
  handleSubmit(event) {
    alert('Ha invertido '+this.state.value +" en " + this.state.fondo + " con exito");
    this.setState({value: 0});
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <select value={this.state.fondo} onChange={this.handleChange}>
          <option value="FPV_BTG_PACTUAL_RECAUDADORA">FPV_BTG_PACTUAL_RECAUDADORA</option>
          <option value="FPV_BTG_PACTUAL_ECOPETROL">FPV_BTG_PACTUAL_ECOPETROL</option>
          <option value="DEUDAPRIVADA">DEUDAPRIVADA</option>
          <option value="FDO-ACCIONES">FDO-ACCIONES</option>
          <option value="FPV_BTG_PACTUAL_DINAMICA">FPV_BTG_PACTUAL_DINAMICA</option>
        </select>
        <br></br>
        <br></br>
        <br></br>
        <label>
            Saldo a invertir:
            <input type="number" value={this.state.value} onChange={this.handleInvertionChange} />
          </label>
          <input type = "submit" value="Invertir!" />
      </form>
    );
  }
}

export default MyDropdown