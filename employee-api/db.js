const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'bob',
    password: 'password',
    database: 'employee_db'
})

db.connect(function(err) {
    if (err) {
        throw err;
    }

    console.log('Connected to mysql');
})

exports.getEmployees = function(callback) {
    db.query("SELECT employee_id, first_name, middle_name, last_name, address_line, post_code, email, nin, bank_sort_code, bank_account_no, salary, department_id FROM employee", 
        function (err, rows) {
            if (err) throw err;
            callback(rows);
        }
    )
}

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
