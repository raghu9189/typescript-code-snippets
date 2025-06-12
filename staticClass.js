var MyStatiClass = /** @class */ (function () {
    function MyStatiClass() {
    }
    MyStatiClass.genCalc = function (x, y) {
        return x + y;
    };
    MyStatiClass.countryName = 'India';
    return MyStatiClass;
}());
var obj = new MyStatiClass();
console.log(obj instanceof (MyStatiClass));
var val = MyStatiClass.genCalc(1, 56);
var myCountryName = MyStatiClass.countryName;
console.log(val, myCountryName);
