import mongoose from "mongoose";

const StudantSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },

        birth: {
            type: String,
            require: true,
        },

        registry: { type: String, },

        scores: { type: Object, }
    },
    { timestamps: true }
)

export default mongoose.model('Studant', StudantSchema);