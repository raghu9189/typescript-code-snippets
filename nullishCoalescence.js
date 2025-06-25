// Nullish Coalescence
// Nullish Coalescence is another JavaScript feature that also works well with TypeScript's null handling. 
// It allows writing expressions that have a fallback specifically when dealing with null or undefined.
//  This is useful when other falsy values can occur in the expression but are still valid. 
//  It can be used with the ?? operator in an expression, similar to using the && operator.
function printMileage(mileage) {
    console.log("Mileage: ".concat(mileage !== null && mileage !== void 0 ? mileage : 'Not Available'));
}
printMileage(null); // Prints 'Mileage: Not Available'
printMileage(0); // Prints 'Mileage: 0'
function getStreakCount(streakCount) {
    console.log("Your Streak Count is ".concat(streakCount !== null && streakCount !== void 0 ? streakCount : '0'));
}
getStreakCount(undefined);
