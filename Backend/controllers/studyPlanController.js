
const studyplanService = require("../services/studyplanService");

const studyplanController = {
    getAll: (req, res) => {
        studyplanService.getAllStudyPlans((err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(results);
        });
    }
};

module.exports = studyplanController;
