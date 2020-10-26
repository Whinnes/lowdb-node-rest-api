const {getConnection} = require('../database')
const { v4: uuidv4 } = require('uuid')

const tasksController = {}

tasksController.listTasks = (req,res)=>{
    const tasks = getConnection().get('tasks').value()
    res.json(tasks)
}

tasksController.listTask = (req,res)=>{
    const task = getConnection().get('tasks').find({id: req.params.id}).value()
    res.json(task)
}

tasksController.createTasks = (req,res)=>{
    const newTask = {
        id: uuidv4(),
        name: req.body.name,
        description: req.body.description
    }
    getConnection().get('tasks').push(newTask).write()
    res.json(newTask)
}

tasksController.updateTask = async(req,res)=>{
    const task = await getConnection().get('tasks').find({id: req.params.id})
    .assign(req.body)
    .write()
    res.json(task)
}

tasksController.deleteTask = (req,res)=>{
    getConnection().get('tasks').remove({id: req.params.id}).write()
    res.json({message: 'Task removed'})
}

module.exports = tasksController