const TasksCtrl = require('./tasks.controller');

//imports
const router = require('express').Router();

//routes
router.route('/')
.post(TasksCtrl.createTasks)
.get(TasksCtrl.viewTasks)

router.route('/:id')
.get(TasksCtrl.viewTask)
.put(TasksCtrl.updateTask)
.delete(TasksCtrl.deleteTask);

//exports
module.exports = router;