function testTypes<T>(data: T): T {
    return data;
}
const myNumVal = 25;
const myNum = testTypes(myNumVal);
const myString = testTypes('raghu');
console.log(myNum);