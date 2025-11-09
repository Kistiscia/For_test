const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "5189",
    database: "mydb",
});

db.connect(err => {
    if (err) throw err;
    console.log("Connected to MySQL 🥰");
});

const studyplanRepository = {
    getAll: (callback) => {
        const sql = "SELECT * FROM study_plan ORDER BY id ASC";
        db.query(sql, callback);
    }
};

module.exports = studyplanRepository;

