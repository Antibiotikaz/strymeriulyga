const router = require("express").Router();
const { getAllUsersAdmin } = require("../controllers/admin/getAllUsersAdmin");
const { verifyUser } = require("../controllers/admin/verifyUser");
router.get("/getUsers", getAllUsersAdmin);
router.put("/verify", verifyUser);
module.exports = router;
