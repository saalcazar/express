const User = require('../models/users')

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    console.log(users)
    res.render('users', {users: users})
  } catch (err) {
    console.log('Error '+ err)
  }
}


const getCreateUser = (req, res)=>{
  res.render('create-user')
}

const getUpdateUser = async (req, res)=>{
  const param = req.params.id
  try {
    const users = await User.find({_id: param})
    console.log(users)
    res.render('update-user', {user: users})
  } catch (err){
    console.log('Error' + err)
  }
}

const getDeleteUser = async (req, res)=>{
  const param = req.params.id
  try {
    const users = await User.find({_id: param})
    console.log(users)
    res.render('delete-user', {user: users})
  } catch (err){
    console.log('Error' + err)
  }
}

const createUser = async (req, res) => {
  const data = req.body
  const user = new User({
    name: data.name,
    age: data.age
  })
  try {
    const result = await user.save();
    console.log('Usuario registrado')
    res.redirect('/users/all')
  } catch (err) {
    console.log('Error '+ err)
  }
}

const updateUser = async (req, res) => {
  const param = req.params.id
  const data = req.body
  try {
    const user = await User.findById(param)
    user.name = data.name
    user.age = data.age
    const result = await user.save();
    console.log('Usuario actualizado')
    res.redirect('/users/all')
  } catch (err) {
    console.log('Error '+ err)
  }
}


const deleteUser = async (req, res) => {
  const param = req.params.id
  try {
    const result = await User.deleteOne({_id: param})
    console.log('Usuario eliminado')
    res.redirect('/users/all')
  }catch (err) {
    console.log('Error '+ err)
  }
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