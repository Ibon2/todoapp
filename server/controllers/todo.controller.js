import Todo from '../models/todo.model.js';
import asyncHandler from 'express-async-handler';
import { apiResponse } from './response.js';

// @desc Get todos
// @route GET /todos/
const getTodos = asyncHandler(async(req, res) => {
    const todos = await Todo.find();

    if (todos === undefined) {
        apiResponse(res, false, 404, "No Todos found.");
        throw new Error("No Todos found.");
    };

    apiResponse(res, true, 200, "Returned all Todos.", todos);
});

// @desc Add todo
// @route POST /todos/
const addTodo = asyncHandler(async(req, res) => {
    const title = req.body.title;
    const description = req.body.description;

    if (!title || !description) {
        apiResponse(res, false, 400, "A required parameter is missing or incorrect.");
        throw new Error("Invalid input.");
    };

    const document = new Todo({
        title: title,
        description: description
    });

    document.save((err) => {
        if (err) {
            console.log(err);
        };
    });

    apiResponse(res, true, 201, "Todo inserted to database.", document);
});

export {
    getTodos,
    addTodo
};