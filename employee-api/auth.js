const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');

router.post('/login', function(req, res, next) {
    passport.authenticate('local', {session: false}, (err, user, info) => {
        if (err || ! user) {
            return res.status(400).json({
                message: 'User not found',
                user: null
            })
        }
    });
})
