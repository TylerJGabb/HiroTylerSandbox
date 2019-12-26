const express = require('express');
const router = express.Router();
const HttpStatus = require('http-status-codes');

router.get('/', (req, res) => {
    res.send('Hello from root').status(HttpStatus.OK);
})

module.exports = router;