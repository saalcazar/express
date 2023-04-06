const conection = require('../conection')

const users = [
  
]

const getUsers = (req, res)=>{
  const sql = 'SELECT * FROM users'
  conection.query(sql, (err, resp) => {
    if (err) {
      console.log('Error')
    }else{
      console.log(resp.rows);
      res.render('users', {users: resp.rows})
    }
});
}

const getCreateUser = (req, res)=>{
  res.render('create-user')
}

const getUpdateUser = (req, res)=>{
  const param = req.params.id
  const sql = 'SELECT * FROM users WHERE id=$1'
  conection.query(sql, [param], (err, result)=> {
    if (err) {
      console.log('Error' + err)
    }else {
      console.log(result.rows)
      res.render('update-user', {user:result.rows})
    }
  })
}

const getDeleteUser = (req, res)=>{
  const param = req.params.id
  const sql = 'SELECT * FROM users WHERE id=$1'
  conection.query(sql, [param], (err, result)=> {
    if (err) {
      console.log('Error' + err)
    }else {
      console.log(result.rows)
      res.render('delete-user', {user:result.rows})
    }
  })
}

const createUser = (req, res) => {
  const sql = 'INSERT INTO users (name, age) VALUES ($1, $2)'
  const data = [req.body.name, req.body.age]
  console.log(req.body)
  conection.query(sql, data, (err, result)=>{
    if (err){
      console.log('Error')
    }else{
      console.log('Usuario registrado')
      res.redirect('/users/all')
    }
  })
}

const updateUser = (req, res) => {
  const param = req.params.id
  const sql = `UPDATE users SET name='${req.body.name}', age='${req.body.age}' WHERE id=${param}`
  conection.query (sql, (err, result)=>{
    if (err) {
      console.log('Error '+ err)
    }else{
      console.log('Usuario actualizado')
      res.redirect('/users/all')
    }
  })
}

const deleteUser = (req, res) => {
  const param = req.params.id
  const sql = `DELETE FROM users WHERE id=${param}`
  conection.query (sql, (err, result)=>{
    if (err) {
      console.log('Error '+ err)
    }else{
      console.log('Usuario eliminado')
      res.redirect('/users/all')
    }
  })
}

module.exports = {
  getUsers,
  getCreateUser,
  getUpdateUser,
  getDeleteUser,
  createUser,
  updateUser,
  deleteUser
}