const express = require('express');
const app = express();

const employeeRoutes = require('./routes/employeeRoutes');
const homeRoutes = require('./routes/homeRoutes');

app.set('view engine', 'ejs');
app.use(express.static('./assets'));

app.use(employeeRoutes);
app.use(homeRoutes);

app.listen(8000);
