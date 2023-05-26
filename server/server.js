require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors")

var corsOptions = {
  origin: function (origin, callback) {
    callback(null, true);
  },
};

const app = express();

app.use(express.json());
app.use(cors(corsOptions));

const User = require("./models/User")

app.get('/', (req, res) => {
  res.status(200).json({ msg: 'Bem-vindo a minha api' })
})

app.post("/auth/register", async (req, res) => {
  const { email } = req.body

  if (!email) {
    return res.status(422).json({ msg: 'O Email e obrigatorio' })
  }

  const user = new User({
    email,
  })

  try {
    await user.save()
    res.status(200).json({ msg: "Cadrasto Realizado Com Sucesso" })
  } catch (error) {
    console.log(error)
  }
})

const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

mongoose
  .connect(`mongodb+srv://${dbUser}:${dbPassword}@diaryprogrammer.bzoompc.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => {
    app.listen(3001)
    console.log('🏄 api conectada ao banco de dados')
  }).catch((err) => console.log(err))