const Sequelize = require('sequelize')
const fs = require('fs')
const path = require('path')

const database = require("../config/dbConnect")
const meal = require('../model/mealTable')



class Controllers {
    static async postMeal(req, res){
        await database.sync()
        let img = await fs.readFileSync(path.join(__dirname, '../uploads/' + req.file.filename)) 
        let request = await meal.create({pic : img})
        res.send('Dado add')
        fs.unlinkSync(path.join(__dirname, "../uploads/" + req.file.filename))
    }
}

module.exports = Controllers;