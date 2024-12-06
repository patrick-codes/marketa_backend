const express = require("express");
const {
  addBusinessInfo,
  updateBusinessInfo,
  getBusinessInfos,
  getSingleBusinessInfo,deleteBusinessInfo,
} = require("../controllers/business_info_controller");
const router = express.Router();

router.post("/add", addBusinessInfo);
router.put("/:id", updateBusinessInfo);
router.get("/getInfo", getBusinessInfos);
router.get("/:id", getSingleBusinessInfo);
router.delete("/:id",deleteBusinessInfo);

module.exports = router;