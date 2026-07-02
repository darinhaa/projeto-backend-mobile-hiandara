const express = require("express");
const app = express();

app.use(express.json());

let usuarios = [];

app.post("/usuarios", (req, res) => {
    const novoUsuario = {
        id: usuarios.length + 1,
        nome: req.body.nome,
        idade: req.body.idade,
        email: req.body.email
    };

    usuarios.push(novoUsuario);

    res.status(201).json(novoUsuario);
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});