
const alunos = [
    { nome: 'João', nota: 7 },
    { nome: 'Maria', nota: 5 },
    { nome: 'Pedro', nota: 8 },
    { nome: 'Ana', nota: 4 },
    { nome: 'Carlos', nota: 6 },
    ];


    const alunosAprovados = (arrayDeAlunos) => arrayDeAlunos.filter(({ nota }) => nota >= 6);

    const alunosAprovadosArray = alunosAprovados(alunos);
    console.log(alunosAprovadosArray);
    