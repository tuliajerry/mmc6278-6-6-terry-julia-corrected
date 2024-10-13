const express = require('express');
const apiRoutes = require('./routes/api-routes');
const htmlRoutes = require('./routes/html-routes');
const exphbs = require('express-handlebars'); 

const app = express();


console.log('express-handlebars:', exphbs);

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

module.exports = app;

