const express = require("express");
const { addCategory,deleteCategory ,getCategoris} = require("../controllers/categories_controller");
const router = express.Router();

router.post("/addCat", addCategory);
router.delete("/:id",deleteCategory);
router.get("/all",getCategoris);

module.exports = router;
