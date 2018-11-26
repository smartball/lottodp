require('babel-register')
require('dotenv').config()

console.log('[ Listen on port: ', `${process.env.HOST}:${process.env.PORT}`, ']')
require('./app')
