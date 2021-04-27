const express = require('express')
const router = express.Router()

const {
    getAllContacts,
    createContact,
    getContactById,
    updatecontact,
    deleteContact
} = require('./contactsController')

router.get('/',getAllContacts)
router.post('/',createContact)
router.get('/:id',getContactById)
router.put('/:id', updatecontact)
router.delete('/:id', deleteContact)

module.exports = router