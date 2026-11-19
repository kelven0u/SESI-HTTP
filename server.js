<<<<<<< HEAD

=======
>>>>>>> 211c57b7745a9f6866b5a729a8ba8d53b676836f
const express = require('express');

const app = express();

app.use(express.json());

const PORT = 3000;

let alunos = [
    {
<<<<<<< HEAD
        id: 1,
        nome: "Ana",
=======
        id: 1, 
        nome: "Ana", 
>>>>>>> 211c57b7745a9f6866b5a729a8ba8d53b676836f
        email: "ana@email.com",
        turma: "TDS2026"
    },
    {
        id: 2,
        nome: "Pedro",
        email: "pedro@email.com",
        turma: "TDS2026"
    }
];

// GET - Listar todos os alunos
app.get("/alunos", (req, res) => {
    res.status(200).json(alunos);
});

<<<<<<< HEAD
// GET - Consultar aluno pelo ID
=======
// GET - Consultar aluno pelo id
>>>>>>> 211c57b7745a9f6866b5a729a8ba8d53b676836f
app.get("/alunos/:id", (req, res) => {
    const id = Number(req.params.id);

    const aluno = alunos.find(a => a.id === id);

<<<<<<< HEAD
    if (!aluno) {
=======
    if (!aluno){
>>>>>>> 211c57b7745a9f6866b5a729a8ba8d53b676836f
        return res.status(404).json({
            mensagem: "Aluno não encontrado."
        });
    }
<<<<<<< HEAD

    res.status(200).json(aluno);
});
=======
})
>>>>>>> 211c57b7745a9f6866b5a729a8ba8d53b676836f

// POST - Cadastrar aluno
app.post("/alunos", (req, res) => {
    const { nome, email, turma } = req.body;

<<<<<<< HEAD
    if (!nome || !email || !turma) {
        return res.status(400).json({
            mensagem: "Informe nome, email e turma."
=======
    if(!nome || !email || !turma) {
        return res.status(400).json({
            mensagem: "Informe nome, email e turma"
>>>>>>> 211c57b7745a9f6866b5a729a8ba8d53b676836f
        });
    }

    const novoAluno = {
<<<<<<< HEAD
        id: alunos.length
            ? Math.max(...alunos.map(a => a.id)) + 1
            : 1,
=======
        // operador ternário
        id: alunos.length ? Math.max(...alunos.map(a => a.id)) + 1 : 1,
>>>>>>> 211c57b7745a9f6866b5a729a8ba8d53b676836f
        nome,
        email,
        turma
    };

    alunos.push(novoAluno);
<<<<<<< HEAD

    res.status(201).json(novoAluno);
});

// PUT - Atualizar aluno
app.put("/alunos/:id", (req, res) => {
=======
    res.status(200).json(novoAluno);
});

// PUT - Atualizar aluno
app.put("/aluno/:id", (req, res) => {
>>>>>>> 211c57b7745a9f6866b5a729a8ba8d53b676836f
    const id = Number(req.params.id);

    const indice = alunos.findIndex(a => a.id === id);

<<<<<<< HEAD
    if (indice === -1) {
        return res.status(404).json({
            mensagem: "Aluno não encontrado."
=======
    if(indice === -1) {
        return res.status(404).json({
            mensagem: "Aluno não encontrado"         
>>>>>>> 211c57b7745a9f6866b5a729a8ba8d53b676836f
        });
    }

    const { nome, email, turma } = req.body;

<<<<<<< HEAD
    if (!nome || !email || !turma) {
        return res.status(400).json({
            mensagem: "Informe nome, email e turma."
=======
    if(!nome || !email || !turma) {
        return res.status(400).json({
            mensagem: "Informe nome, email e turma"
>>>>>>> 211c57b7745a9f6866b5a729a8ba8d53b676836f
        });
    }

    alunos[indice] = {
        id,
        nome,
        email,
        turma
    };

    res.status(200).json(alunos[indice]);
});

<<<<<<< HEAD
// DELETE - Excluir aluno
app.delete("/alunos/:id", (req, res) => {
=======
// DELETE - Excluir aluno - desafio montar estrutura
app.delete("/aluno/:id", (req, res) => {
>>>>>>> 211c57b7745a9f6866b5a729a8ba8d53b676836f
    const id = Number(req.params.id);

    const existe = alunos.some(a => a.id === id);

<<<<<<< HEAD
    if (!existe) {
        return res.status(404).json({
            mensagem: "Aluno não encontrado."
=======
    if(!existe) {
        res.status(404).json({
            mensagem: "Aluno não encontrado"
>>>>>>> 211c57b7745a9f6866b5a729a8ba8d53b676836f
        });
    }

    alunos = alunos.filter(a => a.id !== id);
<<<<<<< HEAD

    res.status(204).send();
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`API executando em http://localhost:${PORT}`);
});
=======
    res.status(204).send();
});
>>>>>>> 211c57b7745a9f6866b5a729a8ba8d53b676836f
