const User = require("../models/User");

function main(req, res) {
  res.status(200).json({ msg: "Bem-vindo a minha api" });
}

async function register(req, res) {
  const { email, token } = req.body;
  console.log(token);

  if (!email) {
    return res.status(422).json({ msg: "O Email e obrigatorio" });
  }

  const user = new User({
    token,
    email,
  });

  try {
    await user.save();
    res.status(200).json({ msg: "Cadrasto Realizado Com Sucesso" });
  } catch (error) {
    console.log(error);
  }
}

async function update(req, res) {
  const { token, newData } = req.body;
  const { email, gender, name, number } = newData;
  console.log(token);

  // if (!email || !token || !name || !number || !gender) {
  //   return res.status(422).json({ msg: "Algo está faltando" });
  // }

  const filter = { token };
  const update = { email, name, number, gender };

  try {
    await User.findOneAndUpdate(filter, update, {
      new: true,
    });

    res.status(200).json({ msg: "Cadrasto Atualizado Com Sucesso" });
  } catch (error) {
    console.log(error);
  }
}

module.exports = { main, register, update };
