const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

let usuarios = [];

app.post('/usuarios', (req, res) => {
  const usuario = {
    id: usuarios.length + 1,
    nome: req.body.nome
  };

  usuarios.push(usuario);

  res.status(201).json({
    mensagem: 'Usuário cadastrado com sucesso!'
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});