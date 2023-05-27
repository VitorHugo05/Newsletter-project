const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config();

var corsOptions = {
  origin: function (origin, callback) {
    callback(null, true);
  },
};

const { main, register, update } = require('./src/routes')
const app = express();

app.use(express.json());
app.use(cors(corsOptions));

app.get('/', main)

app.post("/auth/register", register)

app.put("/auth/update", update)

const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

mongoose
  .connect(`mongodb+srv://${dbUser}:${dbPassword}@diaryprogrammer.bzoompc.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => {
    app.listen(3001)
    console.log('🏄 api conectada ao banco de dados')
  }).catch((err) => console.log(err))