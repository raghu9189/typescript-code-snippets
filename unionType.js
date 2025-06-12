var score = 33;
score = 44;
score = "45";
var newUser = { name: "raghu", id: 12 };
newUser = { username: 'hc', id: 56 };
function getDbId(id) {
    if (typeof id === 'number') {
        console.log(id);
    }
    if (typeof id === 'string') {
        console.log(id);
    }
}
getDbId(56);
