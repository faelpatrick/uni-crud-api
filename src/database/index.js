import mongoose from "mongoose";
mongoose.set('strictQuery', true);

class Database {
    constructor() {
        const connect =  mongoose.connect(
            "mongodb+srv://unicrud:mLz6a3KNvv7WJchn@cluster0.z9fhbmq.mongodb.net/?retryWrites=true&w=majority"
        )
    }
}

export default new Database();