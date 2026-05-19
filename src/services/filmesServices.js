const filmesModel = require('../models/filmesModel');

exports.listar = async () => {
    return await filmesModel.getAll();
};

exports.buscarPorId = async (id) => {
    if (!id) {
        throw new Error('ID é obrigatório');
    }

    const filme = await filmesModel.getById(id);

    if (!filme) {
        throw new Error('Filme não encontrado');
    }

    return filme;
};

exports.criar = async (dados) => {
    const { titulo, genero, ano } = dados;

    // Validações
    if (!titulo || !genero || !ano) {
        throw new Error('Todos os campos são obrigatórios');
    }

    if (ano < 1900) {
        throw new Error('Ano inválido');
    }

    // Padronização
    const novoFilme = {
        titulo: titulo.trim(),
        genero: genero.toUpperCase(),
        ano
    };

    return await filmesModel.create(novoFilme);
};

exports.atualizar = async (id, dados) => {
    if (!id) {
        throw new Error('ID é obrigatório');
    }

    const filmeExistente = await filmesModel.getById(id);

    if (!filmeExistente) {
        throw new Error('Filme não encontrado');
    }

    return await filmesModel.update(id, dados);
};

exports.deletar = async (id) => {
    if (!id) {
        throw new Error('ID é obrigatório');
    }

    const filmeExistente = await filmesModel.getById(id);

    if (!filmeExistente) {
        throw new Error('Filme não encontrado');
    }

    return await filmesModel.delete(id);
};