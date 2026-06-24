const express = require('express');
const app = express();

const turmas = ['Turma A - 1º Ano', 'Turma B - 2º Ano', 'Turma C - 3º Ano'];

app.get('/turmas', (req, res) => {
  res.json(turmas);
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});