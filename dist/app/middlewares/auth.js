'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
const auth = (req, res, next) => {
    console.log('Body', req.body);
    if (req.body.user) {
        next();
    } else {
        res.status(401).json({
            msg: 'Authrization failed! Please login'
        });
    }
};

exports.default = auth;