import express from 'express';
import { addTodo, getTodos, getTodo, deleteTodo, updateTodo } from '../controllers/todo.controller.js';

const todoRouter = express.Router();
const todoRoute = '/';

todoRouter.route(todoRoute).get(getTodos).post(addTodo).put(updateTodo);
todoRouter.route(todoRoute+":todo").get(getTodo).delete(deleteTodo);

export default todoRouter;