const express = require('express');
const router = express.Router();
// @route  Post api/users
//@desc Register a user
//@acess public to register.
router.post('/', (req, res) => {
    res.send('Registered')
})
module.exports = router;