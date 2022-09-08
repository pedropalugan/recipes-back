const database = require('../config/dbConnect')
const Sequelize = require('sequelize')

//Create the rest of the columns of this table

const meal = database.define('meal',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    image : Sequelize.BLOB('long'),
});

module.exports = meal;

database.sync()
