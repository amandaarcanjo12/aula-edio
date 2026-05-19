const express = require('express');
const router = express.Router();
const filmesController = require('../controllers/filmesController');

router.get('/', filmesController.listar);
router.get('/:id', filmesController.buscarPorId);
router.post('/', filmesController.criar);
router.put('/:id', filmesController.atualizar);
router.delete('/:id', filmesController.deletar);

module.exports = router;