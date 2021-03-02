const {
    Router
} = require("express")

const userController = require("../controllers/userController")


const router = Router();

router.get("/", userController.fetchAll)
router.get("/:id", userController.fetchById)
router.post("/", userController.create)
router.put("/:id", userController.update)
router.delete("/:id", userController.deleteUser)

module.exports = router