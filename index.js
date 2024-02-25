import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

import TodoModel from './schema.model.js';

try {
    
    await mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB', error.message);
    });

    const Instance = new TodoModel();
    Instance.author = 'new';
    Instance.title = 'beginnings';
    Instance.body = 'MONGODB';

    await Instance.save();

    console.log("Instance saved Successfully")



} catch (error) {

    console.log(error);

} finally {

    await mongoose.connection.close(); //From th enew version onwards can't write something insider brackets (callback not supported)
    console.log("Mongoose Connection Closed");

};