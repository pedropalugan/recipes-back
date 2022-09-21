const express = require("express")
const app = express()
const Sequelize = require("sequelize")
const cors = require('cors')

const Routes = require('./routes/routes')

const porta = 3000;

app.use(cors())
app.use(express.json())
app.use('/', Routes)


app.listen(porta, () => console.log('Server running on port ' + porta))