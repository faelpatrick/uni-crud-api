import mongoose from "mongoose";

const SubjectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
        semester: {
            type: String,
            require: true,
        },
        course: {
            type: String,
            require: true,
        }
    }, { timestamps: true }
)

export default mongoose.model('Subject', SubjectSchema);