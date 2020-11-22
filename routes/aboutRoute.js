const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const aboutController = require('../controllers/aboutController');

//var urlEncodedParser = bodyParser.urlencoded({extended: false});

router.get('/about', aboutController.about);

module.exports = router;