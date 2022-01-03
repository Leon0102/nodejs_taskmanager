const express = require('express');
const router = express.Router();

const {getAllTasks,createTask,
    getTask,
    delTask,
    updateTask} = require('../controllers/task');

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(delTask);

module.exports = router;