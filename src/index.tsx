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
          title: 'Freelance de website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-04-05 14:00:00')
        },

        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1100,
          createdAt: new Date('2021-04-06 18:00:00')
        }
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
