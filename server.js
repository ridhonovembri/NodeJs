const express = require('express');
const app = express();
const pg = require('pg');
const cors = require('cors');

app.set('view engine', 'ejs');
app.use(express.static('./assets'));
app.use(cors());
app.use(express.json());

//var connect = "postgres://postgres:admin@localhot/dispatch"; 

//define route
const employeeRoute = require('./routes/employeeRoute');
const homeRoute = require('./routes/homeRoute');
const aboutRoute = require('./routes/aboutRoute');

app.use(employeeRoute);
app.use(homeRoute);
app.use(aboutRoute);

const port = process.env.PORT || 8000 
app.listen(port, () => console.log(`Server has been started on PORT ${port}`));
