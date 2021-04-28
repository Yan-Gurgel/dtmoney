import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: '',
          type: '',
          category: '',
          amount: 0,
          createdAt: new Date('04/06/2021'),
        },
      ],
    })
  },

  routes() {
    this.namespace = 'api'; //a partir do endereço /api
    //quando ocorre requisição do tipo get para a rota /transactions
    this.get('/transactions', () => {
      return this.schema.all('transaction');//retorna todas as transações do BD
    })

    this.post('transactions', (schema, request) => { //schema = banco de dados
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)

    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
