"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = to;
function to(promise) {
    return promise.then(data => {
        return [null, data];
    }, error => {
        return [error];
    });
}