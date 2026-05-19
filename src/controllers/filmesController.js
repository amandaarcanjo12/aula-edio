const filmesModel = require('../models/filmesModel');

exports.listar = async (req, res) => {
    try {
        const filmes = await filmesModel.getAll();
        res.json(filmes);
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao buscar filmes' });
    }
};

exports.buscarPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const filme = await filmesModel.getById(id);
        res.json(filme);
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao buscar filme' });
    }
};

exports.criar = async (req, res) => {
    try {
        await filmesModel.create(req.body);
        res.status(201).json({ mensagem: 'Filme criado com sucesso!' });
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao criar filme' });
    }
};

exports.atualizar = async (req, res) => {
    try {
        const { id } = req.params;
        await filmesModel.update(id, req.body);
        res.json({ mensagem: 'Filme atualizado com sucesso!' });
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao atualizar filme' });
    }
};

exports.deletar = async (req, res) => {
    try {
        const { id } = req.params;
        await filmesModel.delete(id);
        res.json({ mensagem: 'Filme deletado com sucesso!' });
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao deletar filme' });
    }
};