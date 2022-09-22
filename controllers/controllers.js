const Sequelize = require('sequelize')
const fs = require('fs')
const path = require('path')

const database = require("../config/dbConnect")
const meal = require('../model/mealTable')
const login = require('../model/login')
const { runInNewContext } = require('vm')


class Controllers {
    static async getData(req, res){
        await database.sync()
        let request = await meal.findAll({raw : true})
        res.status(200).json(request)
    }
    static async postMeal(req, res){
        await database.sync()
        console.log(req.body)
        let titulo = req.body.titulo
        let ing = req.body.ing
        let modo = req.body.modo
        let img = await fs.readFileSync(path.join(__dirname, '../uploads/' + req.file.filename)) 
        let request = await meal.create({
            pic : img,
            titulo : titulo,
            ing : ing,
            modo : modo
        })
        res.status(200).json('Dado add')
        fs.unlinkSync(path.join(__dirname, "../uploads/" + req.file.filename)) 
    }
    static async newUser(req, res){
        let body = await req.body
        database.sync()
        let request = await login.create(req.body)
        res.status(200).json("Usuário criado")
    }
    static async loginUser(req, res){
        let body = await req.body
        database.sync()
        let request = await login.findAll({where:{email : req.body.email}})
        if (request.length == 0){
            res.send("erro")
        }
        else{
            if (req.body.pswd === request[0]['pswd']){
                res.send('1')
            }
        } 
    }
}

module.exports = Controllers;