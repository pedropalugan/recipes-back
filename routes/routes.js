const express = require('express')
var Router = express.Router()
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.resolve("./uploads"))
    },
    filename: function(res, file, cb){
        cb(null, file.originalname)
    }
})


const upload = multer({storage})


const Controllers = require('../controllers/controllers')

Router
    .get('/', Controllers.getData)
    .get('/:id', Controllers.getDatabyPk)
    .post('/postMeal', upload.single('pic'), Controllers.postMeal)
    .post('/newUser', Controllers.newUser)
    .post('/loginUser', Controllers.loginUser)
    .put('/updateData', Controllers.updateData)
    .put('/deleteData', Controllers.deleteData)

module.exports = Router
