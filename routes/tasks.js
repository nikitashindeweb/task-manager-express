const express = require('express');
const router = express.Router();


const {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
} = require('../controllers/tasks');

// Routes
// GET      /tasks  - get all tasks
// POST     /taks - add task
// GET       /tasks/:id  - view one taks
// PUT/PATCH /task/:id update task
// DELETE    /task/:id delete task

router.route('/')
    .get(getAllTasks)
    .post(createTask)

router.route('/:id')
    .get(getTask)
    .patch(updateTask)
    .delete(deleteTask)

module.exports = router;