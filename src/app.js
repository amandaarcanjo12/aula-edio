const express = require('express');
const app = express();

const filmesRoutes = require('./routes/filmesRoutes');

app.use(express.json());
app.use('/filmes', filmesRoutes);

module.exports = app;