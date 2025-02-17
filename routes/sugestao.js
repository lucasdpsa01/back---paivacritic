/*const express = require('express');
const router = express.Router();
const Sugestao = require('../models/sugestao');


//rota q mostra a porra toda - CERTO!!!
router.get('/', async (req, res) => {
    const sugestoes = await Sugestao.findAll();

    res.json(sugestoes);
});

//rota q cria a sugestao da piazada - CERTO!!!
router.post('/sugestao', async (req, res) => {

    const sugestoes = await Sugestao.create({
        nome: req.body.nome,
        recomendacao: req.body.recomendacao
    });

    res.status(201).json(sugestoes);
});

//deleta uma sugestao
router.delete('/sugestao/:nome', async(req, res) =>{
    const nome = req.params.nome;

    const sugestoes = await Sugestao.findOne({ where: { nome } });

    if(!sugestoes) {
        return res.send("Sugestão não encontrada");
    }

    await sugestoes.destroy();
    res.send("Deletado com sucesso!");
});

module.exports = router;*/

const express = require('express');
const router = express.Router();
const Sugestao = require('../models/sugestao');

// Rota para obter todas as sugestões
router.get('/', async (req, res) => {
    try {
        const sugestoes = await Sugestao.findAll();
        res.json(sugestoes);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar sugestões." });
    }
});

// Rota para criar uma sugestão
router.post('/', async (req, res) => {
    try {
        const { nome, recomendacao } = req.body;
        if (!nome || !recomendacao) {
            return res.status(400).json({ error: "Nome e recomendação são obrigatórios!" });
        }

        const novaSugestao = await Sugestao.create({ nome, recomendacao });
        res.status(201).json(novaSugestao);
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar sugestão." });
    }
});

// Rota para deletar uma sugestão por nome
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const sugestao = await Sugestao.findByPk(id);

        if (!sugestao) {
            return res.status(404).json({ error: "Sugestão não encontrada." });
        }

        await sugestao.destroy();
        res.json({ message: "Sugestão deletada com sucesso!" });
    } catch (error) {
        res.status(500).json({ error: "Erro ao deletar sugestão." });
    }
});

module.exports = router;
