import mongoose from 'mongoose';
const { Schema } = mongoose;

const todoSchema = new Schema({
    title: String,
    description: String
});

export default mongoose.model('Todo', todoSchema);