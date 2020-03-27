const express = require('express')
const cors = require('cors')
const { errors } = require('celebrate')
const routes = require('./routes')

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;

/**
 * Metodos HTTP:
 * 
 * GET: Buscar ou listar uma informação do Back-end
 * POST: Criar uma informação no back-end
 * PUT: Altera uma informação no back-end
 * DELETE: Deleta uma informação no back-end
 */

 /**
  * Tipos de Parametros:
  * 
  * Query Parms: Parametros nomeados enviados na rota apos o simbolo de "?" (Filstros, paginações)
  * ex: http://localhost:3333/users?name=Natanael (busque os usuarios com o nome Natanael)
  * 
  * Route Parms: São Parametros utilizados para identificar recursos. >> app.post('/users/:id') <<
  * Ex: http://localhost:3333/users/1 (busque o usuario com id 1)
  * 
  * Request Body: Corpo da requisição, utilizada para criar ou alterar recursos.
  */

  /**
   * Banco de dados relacionais
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * 
   * Banco de dados não relacionais
   * NoSQL: MongoDB, CouchDB, etc...
   */

   /**
    * Driver: SELECT * FROM users
    * 
    * Query Builder: table('users').select('*').where() 
    * 
    * Com o query builder, podemos fazer uma busca usando o javascript. E podemos mudar para qualquer banco SQL, não iremos 
    * mudar nada.
    * 
    * Para o projeto iremos usar como o nosso query builder: Knex.js
    */