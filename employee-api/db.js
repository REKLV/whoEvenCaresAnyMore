const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: '',
    password: '',
    database: 'employee_db'
})

db.connect(function(err) {
    if (err) {
        throw err;
    }

    console.log('Connected to mysql');
})

// exports.getCitiesInCountry = function(countrycode, callback) {
//     db.query("SELECT id, name, countrycode, district, population FROM city WHERE countrycode = ?", [countrycode], 
//         function (err, rows) {
//             if (err) throw err;
//             callback(rows);
//         }
//     )
// }

// exports.getUserById = function(userId, callback) {
//     db.query("SELECT id, email, name FROM users WHERE id = ?", [userId], 
//         function (err, rows) {
//             if (err) throw err;
//             callback(rows);
//         }
//     )
// }

// exports.insertUser = function(data, readyFn) {
//     var query = db.query('INSERT INTO users SET ?', data, function(error, results, fields) {
//         if (error) throw error;
//         readyFn(results.insertId);
//     });
// }

// exports.addCity = function(data, readyFn) {
//     db.query('INSERT INTO city SET ?', data, function(error, results, fields) {
//         if (error) throw error;
//         readyFn(results.insertId);
//     });
// }
