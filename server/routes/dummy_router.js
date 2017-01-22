const express = require('express');
const router = express.Router();

router.post('/dummyRoute', (req, res) => {
	res.end()
})

module.exports = router;