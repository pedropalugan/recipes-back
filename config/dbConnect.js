const Sequelize = require('sequelize')

const database = new Sequelize('receita', 'root', '',{
    dialect : 'mysql',
    host : 'localhost',
    port : 3308
})

module.exports = database;