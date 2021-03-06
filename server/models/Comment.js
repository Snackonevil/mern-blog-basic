const { Schema, Types } = require("mongoose");

function formatDate(date) {
    let formattedDate = new Date(date);
    return formattedDate.toDateString();
}

const commentSchema = new Schema({
    commentId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    commentBody: {
        type: String,
        required: true,
        maxLength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: formatDate,
    },
});

module.exports = commentSchema;
