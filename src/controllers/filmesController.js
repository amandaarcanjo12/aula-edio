const filmesService = require('../services/filmesService');

exports.listar = async (req, res) => {
    try {
        const filmes = await filmesService.listar();
        res.status(200).json(filmes);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
};

exports.buscarPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const filme = await filmesService.buscarPorId(id);
        res.status(200).json(filme);
    } catch (error) {
        res.status(404).json({ erro: error.message });
    }
};

exports.criar = async (req, res) => {
    try {
        await filmesService.criar(req.body);
        res.status(201).json({ mensagem: 'Filme criado com sucesso!' });
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
};

exports.atualizar = async (req, res) => {
    try {
        const { id } = req.params;
        await filmesService.atualizar(id, req.body);
        res.status(200).json({ mensagem: 'Filme atualizado com sucesso!' });
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
};

exports.deletar = async (req, res) => {
    try {
        const { id } = req.params;
        await filmesService.deletar(id);
        res.status(200).json({ mensagem: 'Filme deletado com sucesso!' });
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
};