const { Schema, model } = require("mongoose");

const postSchema = new Schema();

module.exports = model("Post", postSchema);
