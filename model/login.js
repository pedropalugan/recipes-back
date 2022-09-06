const Sequelize = require('sequelize')
const database = require('../config/dbConnect')

const login = database.define('login', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    email: Sequelize.STRING,
    pswd: Sequelize.STRING
})

module.exports= login;