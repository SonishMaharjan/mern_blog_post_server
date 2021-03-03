const { Router } = require("express");

const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");

const router = Router();

router.use("/users", userRoutes);
router.use("/post", postRoutes);

module.exports = router;
