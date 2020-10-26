const router = require('express').Router()
const tasksController = require('../controllers/tasksController')

router.get('/', tasksController.listTasks)
router.get('/:id', tasksController.listTask)
router.post('/', tasksController.createTasks)
router.put('/:id', tasksController.updateTask)
router.delete('/:id', tasksController.deleteTask)

module.exports = router