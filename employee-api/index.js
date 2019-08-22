const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express();
const db = require('./db.js');

app.use(bodyParser.urlencoded())

app.use(express.json());
app.use(cors());

var authMiddleware = function (req, res, next) {
    let token = req.query.token
    if (token === 'abc') {
        next();
    } else {
        res.send("{error: \"Auth failure\"}");
    }
}

// app.use(authMiddleware);

app.post('/addemployee', function(req, res) {
    db.insertEmployee(req.body, function(insertedKey) {
        res.sendStatus(200);
    });
});

app.post('/addsalesemployee', function(req, res) {
    db.insertSalesEmployee(req.body, function(insertedKey) {
        res.sendStatus(200);
    });
});

// app.get('/getemployeesbydepartment', function(req, res) {
//     db.getEmployeesByDepartment(req.body,function(rows) {
//         res.send(rows);
//     })
// });

app.get('/employees', function(req, res) {
    db.getEmployees(function(rows) {
        res.send(rows);
    })
});

app.get('/getemployeesbydepartment', function(req, res) {
    
    db.getEmployeesByDepartment(req.query.id , function(rows) {
        console.log("hbi" + JSON.stringify(req.query.id))
        res.send(rows);        
    })
});

app.get('/getalldepartments', function(req, res) {
    db.getAllDepartments(function(rows) {
        res.send(rows);
    })
});

// function updateCities(citiesReadyFn) {
//     db.getCitiesInCountry('GBR', function(rows) {
//         cities = rows;
//         citiesReadyFn();
//     });
// }

// cities = [];

// app.get('/cities', function(req, res) {
//     updateCities(function() {
//         res.send(cities);        
//     })
// });

// app.get('/getuser', function(req, res) {
//     db.getUserById(1, function(rows) {
//         res.send(rows[0]);        
//     })
// });

// app.get('/adduser', function(req, res) {
//     db.insertUser({email: 'some@test.com', password: 'password', name: 'nametest'})
//     res.send('check');
// });

// app.post('/addcity', function(req, res) {
//     db.addCity(req.body, function(insertedKey) {
//         updateCities(function() {
//             res.send(cities);
//         });
//     });
// });

// app.post('/signup', (req, res, next) => {
//     return passport.authenticate('local', (err, object) => {
//         if (err) throw err;

//         return res.json({err, object}); 
//     })(req, res, next);
//   });

app.listen(8002, function() {
    console.log('World API listening in port 8002');
});
