const router = require("express").Router();

const {
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
    createUser,
} = require("../../controllers/userController");

router
    // route: /api/users
    .route("/")
    // GET: get all users
    .get(getUsers)
    // PUT: create user
    .post(createUser);

router
    // route: /api/users/:userId
    .route("/:id")
    // GET: user by id
    .get(getUserById)
    // PUT: update user
    .put(updateUser)
    // DELETE: delete user
    .delete(deleteUser);

module.exports = router;
