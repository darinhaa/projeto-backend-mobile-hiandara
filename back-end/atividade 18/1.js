const express = require("express");
const app = express();

app.use(express.json());

const usuarios = [
  { id: 1, email: "ana@escola.com", senha: "1234" },
  { id: 2, email: "carlos@escola.com", senha: "abcd" }
];

app.post("/login", (req, res) => {
  const { email, senha } = req.body;

  const usuario = usuarios.find(
    u => u.email === email && u.senha === senha
  );

  if (!usuario) {
    return res.status(401).json({
      mensagem: "E-mail ou senha incorretos"
    });
  }

  res.json({
    mensagem: "Login realizado com sucesso"
  });
});

app.listen(3000);