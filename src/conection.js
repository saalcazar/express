const mongoose = require('mongoose')
const {mongodb} = require('./config')

const conection = mongoose.connect(`mongodb://${mongodb.host}:${mongodb.port}/${mongodb.database}`)
.then((db)=>{
  console.log('Conectado a MongoDB')
}).catch((err)=>{
  console.log('Error '+err)
})

module.exports = conection