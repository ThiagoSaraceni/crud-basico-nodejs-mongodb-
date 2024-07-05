const { Person } = require("./person");
const dotenv = require("dotenv");
const connectToDatabase = require("./src/database/connect");

dotenv.config();
connectToDatabase();

//const person = new Person("Thiago");
//require("./modules/path");
//require("./modules/fs");
//require("./modules/http");

//console.log(person.sayMyName());
require("./modules/express");
