const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const createError = require('http-errors'); // Import the 'http-errors' package

const app = express();

const bookRoute = require("./node-backend/routes/book.routes");
const mongoDb = require('./database/db');

mongoose.Promise = global.Promise;
mongoose.connect(mongoDb.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to the database');
}).catch(error => {
    console.error('Could not connect' + error);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(express.static(path.join(__dirname, 'dist/Bookstore')));
app.use('/api', bookRoute);

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log('Listening on Port: ' + port);
});

app.use((req, res, next) => {
    next(createError(404)); // Use 'createError' to handle 404 errors
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/Bookstore/index.html'));
});

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});