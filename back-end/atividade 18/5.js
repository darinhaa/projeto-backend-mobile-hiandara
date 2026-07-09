const express = require("express");
const app = express();

const sessoes = [
  { token: "abc123", usuarioId: 1 }
];

app.post("/logout", (req, res) => {

  const token = req.headers.authorization;

  const indice = sessoes.findIndex(
    s => s.token === token
  );

  if (indice !== -1) {
    sessoes.splice(indice, 1);
  }

  res.json({
    mensagem: "Logout realizado com sucesso"
  });

});

app.listen(3000);