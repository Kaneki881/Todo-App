const express = require('express');
const mongoose = require('mongoose');
const todosRoute = require('./Routes/todosRoute.js');
const usersRoute = require('./Routes/usersRoute.js');

const app = express();


app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/todo')
    .then((result) => {
        console.log("Data base connected !!");
    })
    .catch((err) => {
        console.log(err);
    });


// todo routes 
app.use('/todos', todosRoute);
app.use('/users', usersRoute);

app.listen(3000, () => {
    console.log("server is running");
});