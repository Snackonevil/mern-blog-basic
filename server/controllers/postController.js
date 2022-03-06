const Post = require("../models/Post");

module.exports = {
    getPosts: async (req, res) => {
        try {
            const posts = await Post.find();
            res.status(200).json(posts);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    getPostById: async (req, res) => {
        try {
            const post = await Post.findOne({ _id: req.params.id });
            !post
                ? res.status(404).json({ message: "Post not found" })
                : res.status(200).json(post);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    createPost: async (req, res) => {
        try {
            await Post.create(req.body);
            res.status(200).json({ message: "Post created" });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    updatePost: async (req, res) => {
        try {
            const post = await Post.findOneAndUpdate(
                { _id: req.params.id },
                { $set: req.body }
            );
            !post
                ? res.status(404).json({ message: "Post not found" })
                : res.status(200).json({ message: "Post updated" });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    deletePost: async (req, res) => {
        try {
            await Post.findOneAndDelete({ _id: req.params.id });
            res.status(200).json({ message: "Post Deleted" });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
};
