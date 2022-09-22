const database = require('../config/dbConnect')
const Sequelize = require('sequelize')

const meal = database.define('meal',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    pic: Sequelize.BLOB('long'),
    titulo: Sequelize.STRING,
    ing : Sequelize.TEXT,
    modo: Sequelize.TEXT
});

database.sync()

module.exports = meal;