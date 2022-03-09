const { Post, User } = require("../models");

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
            const newPost = await Post.create(req.body);
            await User.findOneAndUpdate(
                { username: req.body.username },
                { $set: { posts: newPost._id } }
            );
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
            const post = await Post.findOneAndDelete({ _id: req.params.id });
            if (!post) {
                res.status(400).json({ message: "Post not found" });
            } else {
                await User.findOneAndUpdate(
                    { username: post.username },
                    { $pull: { posts: post._id } }
                );
                res.status(200).json({ message: "Post Deleted" });
            }
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
};
