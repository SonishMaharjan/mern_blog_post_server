const env = require("./env");
const db = require('./db')

const express = require("express")

const app = express()

const APP_PORT = process.env.APP_PORT || '3000'

app.set('port', APP_PORT)

app.listen(app.get('port'), () => {
    console.log(`Sever started at ${app.get('port')}`)
})
