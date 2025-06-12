var User = /** @class */ (function () {
    function User(name, email) {
        this.name = name;
        this.email = email;
        this._courseCount = 1;
    }
    Object.defineProperty(User.prototype, "courseCount", {
        get: function () {
            return this._courseCount;
        },
        set: function (courseCountNum) {
            this._courseCount = courseCountNum;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var myObj = new User('Raghu', 'raghu@gmail.con');
console.log(myObj.courseCount);
myObj.courseCount = 45;
console.log(myObj.courseCount);
