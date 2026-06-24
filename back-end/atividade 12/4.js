const express = require('express');
const app = express();

app.get('/status', (req, res) => {
  res.json({ 
    status: "Ativo", 
    mensagem: "O sistema escolar está funcionando perfeitamente." 
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});