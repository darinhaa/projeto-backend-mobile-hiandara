const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let avisos = [];

app.post("/avisos", (req, res) => {

    const aviso = {
        id: avisos.length + 1,
        titulo: req.body.titulo
    };

    avisos.push(aviso);

    res.status(201).json({
        mensagem: "Aviso cadastrado com sucesso!"
    });

});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});