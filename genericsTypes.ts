function testTypes<T>(data: T): T {
    return data;
}
const myNumVal = 25;
const myNum = testTypes(myNumVal);
console.log(myNum);
const myString = testTypes('raghu');