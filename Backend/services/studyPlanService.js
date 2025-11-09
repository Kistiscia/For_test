
const StudyPlanRepository = require("../repositories/studyplanRepository");

const StudyplanService = {
    getAllStudyPlans: (callback) => {
        StudyPlanRepository.getAll(callback);
    }
};

module.exports = StudyplanService;
