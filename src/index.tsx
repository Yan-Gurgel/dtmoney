import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import { App } from './App';

createServer({
  routes() { 
    this.namespace = 'api'; //a partir do endereço /api
    //quando ocorre requisição do tipo get para a rota /transactions
    this.get('/transactions', () => {
      return [ //devolve o vetor abaixo
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createDat: new Date()
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
