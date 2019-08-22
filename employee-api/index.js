const express = require('express');
const cors = require('cors')
const app = express();
const db = require('./db.js');

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

app.get('/employees', function(req, res) {
    db.getEmployees(function(rows) {
        console.log('dsfdsf');
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
