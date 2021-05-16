const router = require("express").Router();
const { registerUser } = require("../controllers/auth/registerUserController");
const { geUsers } = require("../controllers/auth/getUserController");

router.post("/register", registerUser);
router.get("/getUsers", geUsers);

module.exports = router;
