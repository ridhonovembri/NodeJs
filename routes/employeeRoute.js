const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const emplController = require('../controllers/employeeController');
const { route } = require('./homeRoute');

var urlEncodedParser = bodyParser.urlencoded({extended: false});

router.get('/employee', emplController.employee);
router.get('/getEmployee', emplController.getEmployee);
router.get('/getEmployeeById/:id/:name', urlEncodedParser, emplController.getEmployeeById);
router.post('/employee', urlEncodedParser, emplController.employeePost);
router.post('/postEmployee', urlEncodedParser, emplController.postEmployee);
router.put('/updateEmployee', urlEncodedParser, emplController.updateEmployee);


module.exports = router;
