import express from 'express';
import { addTodo, getTodos } from '../controllers/todo.controller.js';

const todoRouter = express.Router();
const todoRoute = '/';

todoRouter.route(todoRoute).get(getTodos).post(addTodo);

export default todoRouter;