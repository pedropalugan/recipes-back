const Sequelize = require('sequelize')
const fs = require('fs')
const path = require('path')

const database = require("../config/dbConnect")
const meal = require('../model/mealTable')
const login = require('../model/login')


class Controllers {
    static async postMeal(req, res){
        await database.sync()
        let img = await fs.readFileSync(path.join(__dirname, '../uploads/' + req.file.filename)) 
        const titulo = req.body.titulo
        const desc = req.body.desc
        const modo = req.body.modo
        const ing = req.body.ing
        const dificuldade = req.body.dificuldade
        const criador = req.body.criador
        let request = await meal.create({
            pic : img,
            titulo : titulo,
            desc : desc,
            modo : modo,
            ing : ing,
            dificuldade : dificuldade,
            criador : criador
        })
        res.send('Dado add')
        fs.unlinkSync(path.join(__dirname, "../uploads/" + req.file.filename))
    }
}

module.exports = Controllers;