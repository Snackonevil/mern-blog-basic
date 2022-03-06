const User = require("../models/User");

module.exports = {
    getUsers: async (req, res) => {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    getUserById: async (req, res) => {
        try {
            const user = await User.findOne({ _id: req.params.id });
            !user
                ? res.status(404).json({ message: "User not found" })
                : res.status(200).json(user);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    createUser: async (req, res) => {
        try {
            const user = await User.create(req.body);
            res.status(201).json({ message: "User created" });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    updateUser: async (req, res) => {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.id },
                { $set: req.body }
            );
            !user
                ? res.status(404).json({ message: "User not found" })
                : res.status(200).json({ message: "User updated" });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    deleteUser: async (req, res) => {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.id });
            !user
                ? res.status(404).json({ message: "User not found" })
                : res.status(200).json({ message: "User deleted" });
            // Will need to delete associated posts
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
};
