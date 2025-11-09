
const express = require("express");
const router = express.Router();
const studyplanController = require("../controllers/studyplanController");


router.get("/study_plans", studyplanController.getAll);

module.exports = router;
