
const express = require("express");
const router = express.Router();
const StudyPlanController = require("../controllers/studyplanController");


router.get("/study_plans", StudyPlanController.getAll);

module.exports = router;
