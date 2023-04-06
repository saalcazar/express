const express = require('express')
const router = express.Router()
const userControler = require('../controllers/users')


router.get('/all', userControler.getUsers)
router.get('/create', userControler.getCreateUser)
router.get('/update/:id', userControler.getUpdateUser)
router.get('/delete/:id', userControler.getDeleteUser)

router.post('/create', userControler.createUser)
router.post('/update/:id', userControler.updateUser)
router.post('/delete/:id', userControler.deleteUser)

module.exports = router