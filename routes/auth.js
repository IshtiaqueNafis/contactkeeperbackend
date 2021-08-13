const express = require('express');
const router = express.Router();
// @route  Get api/auth
//@desc Get logeed in User
//@acess public to register.
router.get('/', (req, res) => {
    res.send('Get logged in user')
})

// @route  post api/auth
//@desc Auth user and get token
//@acess public
router.post('/', (req, res) => {
    res.send('log in user')
})

module.exports = router;