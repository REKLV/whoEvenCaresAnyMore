const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'bob',
    password: 'bob~Pwd!',
    database: 'employee_db'

})

db.connect(function(err) {
    if (err) {
        throw err;
    }

    console.log('Connected to mysql');
})

//SELECT employee_id, first_name, middle_name, last_name, address_line, post_code, email, nin, bank_sort_code, bank_account_no, salary, employee.department_id, department.name FROM employee inner join department on department.department_id=employee.department_id 

//SELECT employee_id, first_name, middle_name, last_name, address_line, post_code, email, nin, bank_sort_code, bank_account_no, salary, department_id FROM employee
exports.getEmployees = function(callback) {
    db.query("SELECT employee_id, first_name, middle_name, last_name, address_line, post_code, email, nin, bank_sort_code, bank_account_no, salary, employee.department_id, department.name FROM employee inner join department on department.department_id=employee.department_id ", 
        function (err, rows) {
            if (err) throw err;
            callback(rows);
        }
    )
}
exports.insertSalesEmployee = function(data, readyFn) {

    var query = db.query('INSERT INTO sales_employee SET ? ', data, function(error, results, fields) {
        if (error) throw error;
        readyFn(results.insertId);
    });

}


exports.insertEmployee = function(data, readyFn) {
    console.log(data.post_code);
    var valid = 1;

if (/([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/.test(data.post_code)){
    
} else {
    valid = 0;  
    console.log("Invalid uk postcode")
}

if (/^[A-CEGHJ-PR-TW-Z]{1}[A-CEGHJ-NPR-TW-Z]{1}[0-9]{6}[A-DFM]{0,1}$/.test(data.nin)){
    
}else{
    valid = 0;  
    console.log("Invalid uk NIN");
}

if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(data.email)){
    
} else {
    console.log("Invalid email");
    valid = 0;
}
if(/^[0-9]{6,6}$/.test(data.bank_sort_code)){

} else {
    console.log("Invalid sort code");
    valid = 0;
}

if(/^[0-9]{8,8}$/.test(data.bank_account_no)){

} else {
    console.log("Invalid bank account no");
    valid = 0;
}


if(valid==1){
    var query = db.query('INSERT INTO employee SET ? ', data, function(error, results, fields) {
        if (error) throw error;
        readyFn(results.insertId);
    });
}



}

exports.getAllDepartments = function(callback) {
    db.query("SELECT name, department_id FROM department", 
        function (err, rows) {
            if (err) throw err;
            callback(rows);
        }
    )
}

exports.getDepartmentbyID = function(id, callback) {
    db.query("SELECT * FROM department WHERE department_id = ?", id,
        function (err, rows) {
            if (err) throw err;
            callback(rows);
        }
    )
}

// exports.getEmployeesByDepartment = function(callback) {
//     db.query("SELECT employee_id, first_name, middle_name, last_name, address_line, post_code, email, nin, bank_sort_code, bank_account_no, salary, department_id FROM employee where department_id=  '1'" , 
//         function (err, rows) {
//             if (err) throw err;
//             callback(rows);
//         }
//     )
// }


exports.getEmployeesByDepartment = function(depId, callback) {
   //var q= db.query(" select employee_id, first_name, middle_name, last_name, address_line, post_code, email, nin, bank_sort_code, bank_account_no, salary, department_id FROM employee WHERE department_id = ?", [depId], 
   var q= db.query("select employee_id, first_name, middle_name, last_name, address_line, post_code, email, nin, bank_sort_code, bank_account_no, salary, employee.department_id, department.name FROM employee inner join department on employee.department_id=department.department_id WHERE employee.department_id = ? ", [depId], 

   function (err, rows) {
    console.log(JSON.stringify(depId));
    console.log(q.sql)
    
    if (err) throw err;
    callback(rows);
    }
    )
   }


// exports.getEmployeesByDepartment = function(data,results ,readyFn) {
//     var query = db.query('SELECT employee_id, first_name, middle_name, last_name, address_line, post_code, email, nin, bank_sort_code, bank_account_no, salary, department_id FROM employee WHERE department_id= '+ '1 ', 
//     data, function(error, rows ) {
//         if (error) throw error;
//         readyFn(results.insertId);
//         data(rows)

        
//     });
// }




// exports.getUserById = function(userId, callback) {
//     db.query("SELECT id, email, name FROM users WHERE id = ?", [userId], 
//         function (err, rows) {
//             if (err) throw err;
//             callback(rows);
//         }
//     )
// }




// exports.addCity = function(data, readyFn) {
//     db.query('INSERT INTO city SET ?', data, function(error, results, fields) {
//         if (error) throw error;
//         readyFn(results.insertId);
//     });
// }
