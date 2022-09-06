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
});

module.exports = meal;