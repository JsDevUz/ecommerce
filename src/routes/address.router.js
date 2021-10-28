const {Router} = require('express')
const { deleteAddress, addAddress, getAddress } = require('../controllers/address.controller')
const { updateAddress } = require('../controllers/user.controller')
const router = Router()

router.patch('/:id/:aid', updateAddress)
router.delete('/:id/:aid', deleteAddress)
router.post('/:id/', addAddress)
router.get('/:id/', getAddress)

module.exports = {addressRouter: router}