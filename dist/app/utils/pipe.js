"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const pipe = exports.pipe = (...fns) => x => fns.reduce((y, fn) => fn(y), x);