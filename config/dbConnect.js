const Sequelize = require('sequelize')

const database = new Sequelize('receita', 'root', 'Senai115',{
    dialect : 'mysql',
    host : 'localhost',
    port : 3306
})

module.exports = database;