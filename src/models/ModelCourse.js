import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
    },
    {
        timestamps: true
    }

)

export default mongoose.model('Course', CourseSchema);