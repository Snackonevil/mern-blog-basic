const router = require("express").Router();
const apiRoutes = require("./api");

router.get("/", (req, res) => {
    res.send("hello from root");
});
router.use("/api", apiRoutes);

module.exports = router;
