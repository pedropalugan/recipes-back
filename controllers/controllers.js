const Sequelize = require('sequelize')
const fs = require('fs')
const path = require('path')

const database = require("../config/dbConnect")
const meal = require('../model/mealTable')
const login = require('../model/login')



class Controllers {
    static async getData(req, res){
        await database.sync()
        let request = await meal.findAll({raw : true})
        for(let x = 0; x < request.length; x ++) {
        fs.writeFileSync(path.join(__dirname, '../download/' + request[x]['id'] + '.png'), request[x]["pic"])
    }
        res.status(200).json(request)
    }

    static async getDatabyPk(req, res){
        let index = req.params.id
        await database.sync()
        let request = await meal.findByPk(index, {raw : true})
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
    static async updateData(req, res){
        console.log(req.body)
        await database.sync()
        let request = meal.update(req.body, {where:{id : req.body.id}})
        res.send('Dado add')
    }
    static async deleteData(req, res){
        await database.sync()
        let request = meal.destroy({where:{id : req.body.id}})
    }
}

module.exports = Controllers;