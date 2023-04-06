const postgress = require('pg')
const {postgres_database} = require('./config')

const conection = new postgress.Client(postgres_database)

conection.connect((err, conn) => {
  if (err) {
    console.log('Ha ocurrido un error al conectar')
  }else {
    console.log('Conección exitosa')
  }
  return conn
})

module.exports = conection