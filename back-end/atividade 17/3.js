let avisos = [
    { id: 1, titulo: "Reunião às 14h" },
    { id: 2, titulo: "Entrega do trabalho amanhã" }
];

app.get("/avisos", (req, res) => {
    res.json(avisos);
});