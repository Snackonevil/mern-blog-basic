const router = require("express").Router();

const {
    getPosts,
    getPostById,
    updatePost,
    deletePost,
    createPost,
} = require("../../controllers/postController");

router
    // route: /api/Posts
    .route("/")
    // GET: get all Posts
    .get(getPosts)
    // PUT: create Post
    .post(createPost);

router
    // route: /api/Posts/:PostId
    .route("/:postId")
    // GET: Post by id
    .get(getPostById)
    // PUT: update Post
    .put(updatePost)
    // DELETE: delete Post
    .delete(deletePost);

module.exports = router;
