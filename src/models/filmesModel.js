const db = require('../config/database');

exports.getAll = async () => {
    const result = await db.query('SELECT * FROM filmes ORDER BY id');
    return result.rows;
};

exports.getById = async (id) => {
    const result = await db.query('SELECT * FROM filmes WHERE id = $1', [id]);
    return result.rows[0];
};

exports.create = async (filme) => {
    const { titulo, genero, ano } = filme;
    await db.query(
        'INSERT INTO filmes (titulo, genero, ano) VALUES ($1, $2, $3)',
        [titulo, genero, ano]
    );
};

exports.update = async (id, filme) => {
    const { titulo, genero, ano } = filme;
    await db.query(
        'UPDATE filmes SET titulo = $1, genero = $2, ano = $3 WHERE id = $4',
        [titulo, genero, ano, id]
    );
};

exports.delete = async (id) => {
    await db.query('DELETE FROM filmes WHERE id = $1', [id]);
};