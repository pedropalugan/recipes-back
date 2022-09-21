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
    .post('/uploadMealPic', upload.single('pic'), Controllers.postMeal)
    .post('/newUser', Controllers.newUser)
    .post('/loginUser', Controllers.loginUser)

module.exports = Router