import Todo from '../models/todo.model.js';
import asyncHandler from 'express-async-handler';
import { apiResponse } from './response.js';

// @desc Get todos
// @route GET /todos/
const getTodos = asyncHandler(async(req, res) => {
    const todos = await Todo.find({});

    if (todos === undefined) {
        apiResponse(res, false, 404, "No Todos found.");
        throw new Error("No Todos found.");
    };

    apiResponse(res, true, 200, "Returned all Todos.", todos);
});

// @desc Get todo
// @route GET /todos/:todo
const getTodo = asyncHandler(async(req, res) => {
    const todo = await Todo.findOne({todo: req.params.todo}).exec();

    if (todo === undefined) {
        apiResponse(res, false, 404, "No Todo with inputted todo found.");
        throw new Error("No Todo with inputted todo found.");
    };

    apiResponse(res, true, 200, "Returned Todo.", todo);
});

// @desc Add todo
// @route POST /todos/
const addTodo = asyncHandler(async(req, res) => {
    const todo = req.body.todo;
    const priority = req.body.priority;

    if (!todo || !priority) {
        apiResponse(res, false, 400, "A required parameter is missing or incorrect.");
        throw new Error("Invalid input.");
    };

    const document = new Todo({
        todo: todo,
        priority: priority
    });

    document.save((err) => {
        if (err) {
            console.log(err);
        };
    });

    apiResponse(res, true, 201, "Todo inserted to database.", document);
});

// @desc Delete todo
// @route DELETE /todos/:todo
const deleteTodo = asyncHandler(async(req, res) => {
    const todo = await Todo.findOne({ todo: req.params.todo });

    if (!todo) {
        apiResponse(res, false, 404, "No Todo with inputted title found.");
        throw new Error("No Todo with inputted title found.");
    };

    await todo.remove();
    apiResponse(res, true, 200, "Deleted Todo.", todo);
});


// @desc Update todo
// @route PUT /todos/
const updateTodo = asyncHandler(async(req, res) => {
    let todo = await Todo.findOneAndUpdate({ todo: req.body.todo }, { priority: req.body.priority });

    if (!todo) {
        apiResponse(res, false, 404, "No Todo with inputted title found.");
        throw new Error("No Todo with inputted title found.");
    };

    todo = await Todo.findOne({ todo: req.body.todo });

    apiResponse(res, true, 200, "Updated Todo.", todo);
});

export {
    getTodos,
    getTodo,
    addTodo,
    deleteTodo,
    updateTodo
};