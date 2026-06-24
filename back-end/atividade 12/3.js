const express = require('express');
const app = express();

const reservas = ['Laboratório de Informática - 14:00', 'Quadra Poliesportiva - 10:00'];

app.get('/reservas', (req, res) => {
  res.json(reservas);
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});