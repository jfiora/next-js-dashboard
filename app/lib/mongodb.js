import mongoose from 'mongoose';

let cachedDb = null;

export async function connectMongoDb() {
    if (cachedDb) {
        return cachedDb;
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connection to DeportBot db successfull");
        cachedDb = db;
        return db;
    } catch (error) {
        console.error('Error trying to connect to db: ', error);
        throw error;
    }
}