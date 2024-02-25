import { timeStamp } from 'console';
import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const TodoSchema = new Schema({
    
    id: ObjectId,
    
    // id: mongoose.Types.ObjectId, can also be written like this, it won't require the const ObjectId;
    
    author:{
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true
    },

    body: {
        type: String,
        required: true
    }

}, { timestamps: true } );

const TodoModel = mongoose.model('TodoModel', TodoSchema);

export default TodoModel;