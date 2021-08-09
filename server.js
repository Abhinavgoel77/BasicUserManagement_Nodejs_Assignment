require('dotenv').config()
const bcrypt = require('bcrypt')
const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const  Router = express.Router()
const routes = require('./routes/route')
const auth = require('./middleware/auth')

app.use(express.json())

app.use('/api',routes(Router))

app.listen(3000)
