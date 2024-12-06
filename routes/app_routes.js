const express = require("express");
const {
  addBusinessInfo,
  updateBusinessInfo,
  getBusinessInfos,
  getSingleBusinessInfo,
} = require("../controllers/business_info_controller");
const router = express.Router();

router.post("/add", addBusinessInfo);
router.post("/update", updateBusinessInfo);
router.get("/getInfo", getBusinessInfos);
router.get("/getSingleInfo", getSingleBusinessInfo);

module.exports = router;