const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const blogController = require('../controllers/employeeController')

var urlEncodedParser = bodyParser.urlencoded({extended: false});

router.get('/employee', blogController.employee);
router.post('/employee', urlEncodedParser, blogController.employeePost);

module.exports = router;
