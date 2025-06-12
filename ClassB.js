"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClassA_1 = require("./ClassA"); // export { calcAdd }
var DefaultClass_1 = require("./DefaultClass"); // export default
var myRes = (0, ClassA_1.calcAdd)(25, 65);
var myResSub = (0, DefaultClass_1.default)(50, 25);
console.log(myRes);
console.log(myResSub);
