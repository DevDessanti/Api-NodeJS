const connection = require('../database/connection')
const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TaskController')

router.post('/novaTarefa', TaskController.novaTarefa)
router.get('/tarefas', TaskController.listarTarefa)
router.get('/umatarefa/:id', TaskController.listarUmaTarefa)
router.delete('/tarefa/:id', TaskController.deletarUmaTarefa)
router.put('/atualizar/tarefa/:id', TaskController.atualizaTarefa)

module.exports = router