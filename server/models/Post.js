const { Schema, model } = require("mongoose");
const commentSchema = require("./Comment");

function formatDate(date) {
    let formattedDate = new Date(date);
    return formattedDate.toDateString();
}

const postSchema = new Schema(
    {
        postText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            get: formatDate,
            default: Date.now,
        },
        username: {
            type: String,
            required: true,
        },
        comments: [commentSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

module.exports = model("Post", postSchema);
