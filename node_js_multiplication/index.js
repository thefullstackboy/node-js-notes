const express = require("express");
const app = express();
const port = 3001;


//importing database connection
const database = require('./util/database')


//initiate body parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));



//file import 
const multiPlication = require('./Router/Muliplication_Router');

//file use

app.use('/api/v1',multiPlication);

//create database on server and on success start it.
//create database on server and on success start it.
database.sync({ alter: false }).then(() => {       
    app.listen(port, () =>
    console.log(`Server started on port ${port}`)
);
}).catch(error => {
      console.log("I am in error part",error)
})
