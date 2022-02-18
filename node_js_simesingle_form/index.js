const express = require("express");
const app = express();
const port = 3000;


//importing database connection
const database = require('./Utile/database')


//initiate body parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//school form import
const schoolForm = require('./Router/SchoolFormRouter')


//school form use karna ha
app.use('/api/v1',schoolForm);


//create database on server and on success start it.
//create database on server and on success start it.
database.sync({ alter: false }).then(() => {       
    app.listen(port, () =>
    console.log(`Server started on port ${port}`)
);
}).catch(error => {
      console.log("I am in error part",error)
})
