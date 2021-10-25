'use strict';
require("dotenv").config();
const express = require('express')
const app = express();
const db = require("./config/createDb")
var cors = require("cors");

const pubHandler = require('./app/handler/publicacion')
const commonHandler = require('./app/handler/login')
const userHandler = require('./app/handler/usuario')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.init()

commonHandler(app);
userHandler(app);
pubHandler(app);

const PORT = process.env.NODE_DOCKER_PORT || 3000;
app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
