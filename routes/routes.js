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
    .post('/uploadMealPic', upload.single('image'), Controllers.postMeal)

module.exports = Router