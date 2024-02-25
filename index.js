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
    Instance.author = 'AAKASH';
    Instance.title = 'A';
    Instance.body = 'asa';

    await Instance.save();

    console.log("Instance saved Successfully")



} catch (error) {

    console.log(error);

} finally {

    await mongoose.connection.close( ()=> {
        console.log('MongoDB Connection Closed');
    })

};