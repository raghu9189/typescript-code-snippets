function getDbId(id) {
    if (typeof id === 'string') {
        console.log(id);
    }
    if (typeof id === 'number') {
        console.log(id);
    }
}
function getUserArray() {
    return [1, 2, 3];
}
getDbId(34);
getDbId('45');
console.log(Array.isArray(getUserArray()));
