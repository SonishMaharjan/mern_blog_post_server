const postController = require("../controllers/postController");

const { Router } = require("express");

const router = Router();

router.get("/", postController.getAllPosts);
router.get("/:id", postController.getPost);
router.post("/", postController.create);
router.put("/:id", postController.update);
router.delete("/:id", postController.deletePost);

router.get("/user-post/:user_id", postController.getUserPosts);

module.exports = router;
