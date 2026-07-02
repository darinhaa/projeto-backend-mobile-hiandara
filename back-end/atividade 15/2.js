const express = require("express");
const app = express();

app.use(express.json());

let tarefas = [
    { id: 1, nome: "Estudar", concluida: false },
    { id: 2, nome: "Fazer atividade", concluida: true }
];

// Listar todas
app.get("/tarefas", (req, res) => {
    res.json(tarefas);
});

// Buscar por ID
app.get("/tarefas/:id", (req, res) => {
    const tarefa = tarefas.find(t => t.id == req.params.id);

    if (!tarefa) {
        return res.status(404).json({ mensagem: "Tarefa não encontrada" });
    }

    res.json(tarefa);
});

// Criar
app.post("/tarefas", (req, res) => {
    const novaTarefa = {
        id: tarefas.length + 1,
        nome: req.body.nome,
        concluida: req.body.concluida
    };

    tarefas.push(novaTarefa);
    res.status(201).json(novaTarefa);
});

// Atualizar
app.put("/tarefas/:id", (req, res) => {
    const tarefa = tarefas.find(t => t.id == req.params.id);

    if (!tarefa) {
        return res.status(404).json({ mensagem: "Tarefa não encontrada" });
    }

    tarefa.nome = req.body.nome;
    tarefa.concluida = req.body.concluida;

    res.json(tarefa);
});

// Excluir
app.delete("/tarefas/:id", (req, res) => {
    tarefas = tarefas.filter(t => t.id != req.params.id);

    res.json({ mensagem: "Tarefa removida" });
});

app.listen(3000);