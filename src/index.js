const express = require('express');
const pool = require('./config/database');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/clientes/:id/frutas', async (req, res) => {
  const { id } = req.params;

  try {
    const query = `
      SELECT f.nome 
      FROM frutas f
      JOIN vendas v ON f.id = v.fruta_id
      WHERE v.cliente_id = $1
    `;
    
    const resultado = await pool.query(query, [id]);
    
    if (resultado.rows.length === 0) {
      return res.status(404).json({ mensagem: "Nenhuma fruta encontrada para este cliente." });
    }

    res.json(resultado.rows);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: "Erro ao buscar dados no banco." });
  }
});

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});