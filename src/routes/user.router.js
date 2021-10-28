const {Router} = require('express');
const { createUser, getUsers, getUser, deleteUser, updateUser } = require('../controllers/user.controller');

const router = Router();

router.post('/',createUser)
router.get('/',getUsers)
router.get('/:id',getUser)
router.delete('/:id',deleteUser)
router.patch('/:id',updateUser)

module.exports = {userRouter: router}