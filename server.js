const express = require('express');
const indexController = require('./index');
const userController = require('./user');

const app = express();
app.use('/user', userController);
app.use('/', indexController);
app.set("view engine", "ejs");
app.listen(3000, () => {
    console.log('Server started and listening on port 3000');
});