"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = (req, res) => {
    // console.log('Connection', connection)
    res.json({ msg: `${req.params.id}` });
};