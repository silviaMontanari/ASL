import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state ={
    counter : 0
  }

  render() {
    return (
      <div className="App">
      <h1 style={{color: "#99ccff"}}> Contatore </h1>
        <button style={{border: "12px solid pink", padding:"20px", margin: "10px", borderRadius:"10px", width: "200px", fontWeight: "bold", fontSize: "15px"}} onClick={()=> this.setState({counter: this.state.counter + 1})}>incrementa</button>
        <button style={{border: "12px solid pink", padding:"20px", margin: "10px", borderRadius:"10px", width: "200px", fontWeight: "bold", fontSize: "15px"}} onClick={()=> this.setState({counter: this.state.counter - 1})}>decrementa</button>

        <h1>{this.state.counter}</h1> 
        
      </div>

    );
  }
}

export default App;
