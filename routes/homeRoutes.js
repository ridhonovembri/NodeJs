const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const blogController = require('../controllers/employeeController');
const homeController = require('../controllers/homeController');

var urlEncodedParser = bodyParser.urlencoded({extended: false});

router.get('/', homeController.home);
router.get('/about', homeController.about);

module.exports = router;