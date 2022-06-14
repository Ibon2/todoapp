import mongoose from 'mongoose';
const { Schema } = mongoose;

const todoSchema = new Schema({
    todo: String,
    priority: Number
});

export default mongoose.model('Todo', todoSchema);