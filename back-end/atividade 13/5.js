const usuarios = [
    {
      id: 1,
      nome: "Ana",
      email: "ana@escola.com",
      perfil: "Aluna"
    },
    {
      id: 2,
      nome: "Carlos",
      email: "carlos@escola.com",
      perfil: "Professor"
    },
    {
      id: 3,
      nome: "Mariana",
      email: "mariana@escola.com",
      perfil: "Coordenadora"
    }
  ];
  
  const avisos = [
    {
      id: 1,
      titulo: "Reunião de Pais",
      data: "10/08/2026"
    },
    {
      id: 2,
      titulo: "Entrega de Trabalhos",
      data: "12/08/2026"
    },
    {
      id: 3,
      titulo: "Feriado Escolar",
      data: "15/08/2026"
    },
    {
      id: 4,
      titulo: "Feira de Ciências",
      data: "20/08/2026"
    }
  ];
  
  const tarefas = [
    {
      id: 1,
      descricao: "Resolver lista de Matemática",
      status: "Pendente"
    },
    {
      id: 2,
      descricao: "Ler capítulo de História",
      status: "Concluída"
    },
    {
      id: 3,
      descricao: "Preparar apresentação",
      status: "Em andamento"
    }
  ];
  
  const reservas = [
    {
      id: 1,
      sala: "Laboratório de Informática",
      responsavel: "Professor Carlos",
      horario: "08:00"
    },
    {
      id: 2,
      sala: "Sala Multimídia",
      responsavel: "Professora Ana",
      horario: "14:00"
    }
  ];
  
  console.log("Usuários:");
  console.log(usuarios);
  
  console.log("Avisos:");
  console.log(avisos);
  
  console.log("Tarefas:");
  console.log(tarefas);
  
  console.log("Reservas:");
  console.log(reservas);