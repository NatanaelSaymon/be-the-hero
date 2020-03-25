const express = require('express')

const SessionController = require('./controller/SessionController')

const OngController = require('./controller/OngController')

const IncidentController = require('./controller/IncidentController')

const ProfileController = require('./controller/ProfileController')

const routes = express.Router()

//login
routes.post('/sessions', SessionController.create)

//LISTAGEM DE ONGS
routes.get('/ongs', OngController.index)
//CADASTRO DE ONGS
routes.post('/ongs', OngController.create)

routes.get('/profile', ProfileController.index)

routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes;

