const router = require("express").Router();

router.route("/").get((req, res) => {
    res.send("hello from user routes");
});

module.exports = router;
