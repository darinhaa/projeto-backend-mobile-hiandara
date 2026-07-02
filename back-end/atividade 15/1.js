const express = require("express");
const app = express();

app.use(express.json());

let usuarios = [
    { id: 1, nome: "João", idade: 20 },
    { id: 2, nome: "Maria", idade: 22 }
];

// Listar todos
app.get("/usuarios", (req, res) => {
    res.json(usuarios);
});

// Buscar por ID
app.get("/usuarios/:id", (req, res) => {
    const usuario = usuarios.find(u => u.id == req.params.id);

    if (!usuario) {
        return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }

    res.json(usuario);
});

// Criar
app.post("/usuarios", (req, res) => {
    const novoUsuario = {
        id: usuarios.length + 1,
        nome: req.body.nome,
        idade: req.body.idade
    };

    usuarios.push(novoUsuario);
    res.status(201).json(novoUsuario);
});

// Atualizar
app.put("/usuarios/:id", (req, res) => {
    const usuario = usuarios.find(u => u.id == req.params.id);

    if (!usuario) {
        return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }

    usuario.nome = req.body.nome;
    usuario.idade = req.body.idade;

    res.json(usuario);
});

// Excluir
app.delete("/usuarios/:id", (req, res) => {
    usuarios = usuarios.filter(u => u.id != req.params.id);

    res.json({ mensagem: "Usuário removido" });
});

app.listen(3000);