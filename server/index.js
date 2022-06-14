import express from 'express';
import mongoose from 'mongoose';
import bp from 'body-parser';
import cors from 'cors';
import todoRouter from "./routers/todo.router.js";

const app = express();

app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Welcome to the Todo App server");
});

app.use('/todos', todoRouter);

mongoose.connect('mongodb+srv://admin:PFglMhoMZnhZAvZo@cluster0.gzhjxhm.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(5000, () => console.log('Server running on port: 5000')))
    .catch((err) => console.log(err.message));