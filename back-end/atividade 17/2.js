let tarefas = [];

app.post("/tarefas", (req, res) => {

    const tarefa = {
        id: tarefas.length + 1,
        descricao: req.body.descricao
    };

    tarefas.push(tarefa);

    res.json({
        mensagem: "Tarefa cadastrada com sucesso!"
    });

});