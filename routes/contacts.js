const express = require('express');
const router = express.Router();
// @route  Post api/contacts
//@desc get all user contacts
//@acess private.
router.get('/', (req, res) => {
    res.send('contacts')
})
// @route  Post api/contacts
//@desc add new contact
//@acess private.
router.post('/', (req, res) => {
    res.send( 'add contact')
})
// @route  put api/contacts/:id
//@desc Update contact
//@acess private.
router.put('/:id', (req, res) => {
    res.send( 'update contact')
})

// @route  delete api/contacts/:id
//@desc Delete contact
//@acess private.
router.delete('/:id', (req, res) => {
    res.send( 'delete contact')
})


module.exports = router;