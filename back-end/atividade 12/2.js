const express = require('express');
const app = express();

const tarefas = ['Estudar Express', 'Fazer lição de Matemática', 'Revisar cronograma escolar'];

app.get('/tarefas', (req, res) => {
  res.json(tarefas);
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});