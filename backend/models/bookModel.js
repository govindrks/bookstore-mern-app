import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
            },
            publishYear: {
                type: Number,
                required: true,
            },
    },
    {
        timeStamps: true,  // Enable automatic timestamp management
    }
);

export const Book = mongoose.model('Cat', bookSchema);