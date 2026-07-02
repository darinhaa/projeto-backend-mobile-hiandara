app.delete("/usuarios/:id", (req, res) => {
    usuarios = usuarios.filter(u => u.id != req.params.id);

    res.json({ mensagem: "Usuário removido" });
});