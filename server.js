const express = require('express');
const app = express();
const employeeController = require('./controllers/employeeController');


app.set('view engine', 'ejs');

app.use(express.static('./assets'));

app.listen(8000);

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/about', (req, res) => {
    res.render('about');
})

