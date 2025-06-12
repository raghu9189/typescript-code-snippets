class MyStatiClass {
    public name: string;
    static countryName: string = 'India';
    static genCalc(x: number, y: number): number {
        return x + y;
    }
}
const obj = new MyStatiClass();
const val = MyStatiClass.genCalc(1, 56);
const myCountryName = MyStatiClass.countryName;
console.log(val, myCountryName);
console.log(obj instanceof (MyStatiClass));