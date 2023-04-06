const express = require('express')
const path = require('path')
const conection = require('./conection')
const app = express()
const port = 3000
const user = require('./routes/users')
const loggedMiddleware = require('./middleware/logged')

//Set
app.set('title', 'Aplicación hecha en NODE')
app.set('port', '3000')
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//Middleware
//app.use(loggedMiddleware.isLogged)
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended:false}))

//rutas
app.get('/', (req, res)=>{
  res.render('index')
})

app.use('/users', user)

app.listen(app.get('port'), ()=>{
  console.log('Mi '+ app.get('title') +' está corriendo en el puerto '+ app.get('port'))
})