import mongoose from "mongoose";

const ProfessorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },

        birth: {
            type: String,
            require: true,
        },
        salary: { type: String }
    },
    {
        timestamps: true
    }

)

export default mongoose.model('Professor', ProfessorSchema);