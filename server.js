require('babel-register')
require('module-alias/register')
require('dotenv').config()

console.log('[ Listen on port: ', `${process.env.HOST}:${process.env.PORT}`, ']')
require('./app')
