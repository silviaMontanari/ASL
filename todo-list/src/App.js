import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {
  constructor(){
  super();
  this.state = {
    lista:'',
    tutti: []
  };
     this.onChangeText = this.onChangeText.bind(this);
    this.onSubmitText = this.onSubmitText.bind(this);
  }
  
  onChangeText(event) {
    this.setState({ lista: event.target.value });
  }
  
  onSubmitText(event) {
    event.preventDefault()
    this.setState({
      lista: '',
      tutti: [...this.state.tutti, this.state.lista]
    });
  }
  
  render() {
    return (

      <div>
        <form onSubmit={this.onSubmitText}>
        <h1 style={{color: "blue"}}> Lista ad inserimento utente </h1>
          <input value={this.state.lista} onChange={this.onChangeText} />
          <button>Immetti le parole nella lista</button>
        </form>
        <ul>
        {
          this.state.tutti.map((todo, index) => <li key={index}>{todo}</li>)
        }
        </ul>
      </div>
    )
  }
}

