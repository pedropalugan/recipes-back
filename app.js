const express = require("express")
const app = express()
const Sequelize = require("sequelize")

const Routes = require('./routes/routes')

const porta = 3000;

app.use('/', Routes)
app.use(express.json())

app.listen(porta, () => console.log('Server running on port ' + porta))