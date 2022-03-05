const { Schema, model } = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: [true, "Username is required"],
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                "Please fill in a valid email address",
            ],
        },
        password: {
            type: String,
        },
        posts: [
            {
                type: Schema.Types.ObjectId,
                ref: "Post",
            },
        ],
        // friends: [
        //     {
        //         type: Schema.Types.ObjectId,
        //         ref: "User",
        //     },
        // ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

userSchema.plugin(passportLocalMongoose);

module.exports = model("User", userSchema);
