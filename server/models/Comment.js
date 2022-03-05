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
    },
    username: {
        type: String,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: formatDate,
    },
});

module.exports = commentSchema;
