"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUp(name, email, isPaid) {
}
var res = addTwo(5);
console.log(res);
console.log(getUpper('raghu'));
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return 200;
}
var getHello = function (s) {
    return '';
};
var heros = ['iron man', 'thor', 'antman'];
var herosResult = heros.map(function (hero) {
    return "hero is ".concat(hero);
});
console.log(herosResult);
function printError(errorMessage) {
    console.log(errorMessage);
}
function handleError(errorMessage) {
    throw new Error(errorMessage);
}
handleError('NoCustAvailable');
