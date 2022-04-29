const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async');
const {createCustomAPIError} = require('../error/custom-error');

const getAllTasks = asyncWrapper (async (req, res, next) =>{
        const tasks = await Task.find({});
        res.status(200).json({
            success: true,
            count: tasks.length,
            tasks : tasks
        });
});
 

const createTask = asyncWrapper(async (req, res, next) =>{
     const task = await Task.create(req.body);
        res.status(201).json({
            message: 'Task created successfully',
            task: task
        });
});
const getTask = asyncWrapper(async (req, res, next) =>{
    const task = await Task.findById(req.params.id);
        if(!task){
            return next(createCustomAPIError('Task not found with id ' + req.params.id, 404, 'TASK_NOT_FOUND'));
            // return res.status(404).json({
            //     success: false,
            //     message: 'Task not found with id ' + req.params.id
            // });
        }
        res.status(200).json({
            success: true,
            task: task
        }); 
});
const delTask = asyncWrapper(async (req, res, next) =>{
    const task = await Task.findByIdAndDelete(req.params.id);
        if(!task){
            return next(createCustomAPIError('Task not found with id ' + req.params.id, 404, 'TASK_NOT_FOUND'));
            // return res.status(404).json({
            //     success: false,
            //     message: 'Task not found with id ' + req.params.id
            // });
        }
        res.status(200).json({
            success: true,
            message: 'Task deleted successfully'
        });
});
const updateTask = asyncWrapper(async (req, res, next) =>{
   const task = await Task.findByIdAndUpdate(req.params.id, req.body,
            {
                new: true,
                runValidators: true
                });
        if(!task){
            return next(createCustomAPIError('Task not found with id ' + req.params.id, 404, 'TASK_NOT_FOUND'));
            // return res.status(404).json({
            //     success: false,
            //     message: 'Task not found with id ' + req.params.id
            // });
        }
        res.status(200).json({
            task: task,
        });
});
const editTask = asyncWrapper(async (req, res, next) =>{
     const task = await Task.findByIdAndUpdate(req.params.id, req.body,
            {
                new: true,
                runValidators: true,
                overwrite: true
                });
        if(!task){
            return next(createCustomAPIError('Task not found with id ' + req.params.id, 404, 'TASK_NOT_FOUND'));
            // return res.status(404).json({
            //     success: false,
            //     message: 'Task not found with id ' + req.params.id
            // });
        }
        res.status(200).json({
            success: true,
            message: 'Task updated successfully'
        });
});

module.exports = { 
    getAllTasks,
    createTask,
    getTask,
    delTask,
    updateTask,
}