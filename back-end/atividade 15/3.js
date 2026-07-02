app.patch("/usuarios/:id/nome", (req, res) => {
    const usuario = usuarios.find(u => u.id == req.params.id);

    if (!usuario) {
        return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }

    usuario.nome = req.body.nome;

    res.json(usuario);
});