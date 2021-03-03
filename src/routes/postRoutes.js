const postController = require("../controllers/postController");

const { Router } = require("express");

const { authenticate } = require("../middlewares/authMiddleware");

const router = Router();

router.get("/user-post/", authenticate, postController.getUserPosts);

router.post("/", authenticate, postController.create);
router.put("/:id", authenticate, postController.update);
router.delete("/:id", authenticate, postController.deletePost);

router.get("/", postController.getAllPosts);
router.get("/:id", postController.getPost);

module.exports = router;
