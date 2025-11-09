
const studyplanRepository = require("../repositories/studyplanRepository");

const studyplanService = {
    getAllStudyPlans: (callback) => {
        studyplanRepository.getAll(callback);
    }
};

module.exports = studyplanService;
