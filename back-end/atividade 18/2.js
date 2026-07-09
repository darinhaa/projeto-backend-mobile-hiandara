const express = require("express");
const app = express();

const sessoes = [
  { token: "abc123", usuarioId: 1 }
];

function autenticar(req, res, next) {
  const token = req.headers.authorization;

  const sessao = sessoes.find(s => s.token === token);

  if (!sessao) {
    return res.status(401).json({
      mensagem: "Acesso negado"
    });
  }

  next();
}

app.get("/perfil", autenticar, (req, res) => {
  res.json({
    mensagem: "Acesso permitido"
  });
});

app.listen(3000);