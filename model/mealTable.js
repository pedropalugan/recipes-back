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
    desc: Sequelize.STRING,
    modo: Sequelize.STRING,
    ing: Sequelize.STRING,
    dificuldade: Sequelize.STRING,
    criador: Sequelize.STRING
});

module.exports = meal;