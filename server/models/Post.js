const { Schema, model } = require("mongoose");

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
