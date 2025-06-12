function addTwo(num: number): number {
    return num + 2;
}

function getUpper(val: string) {
    return val.toUpperCase();
}
function signUp(name: string, email: string, isPaid: boolean) {

}
let res = addTwo(5);
console.log(res);
console.log(getUpper('raghu'));
function getValue(myVal: number): boolean | number {

    if (myVal > 5) {
        return true;
    }
    return 200;

}

const getHello = (s: string): string => {
    return '';
}

const heros = ['iron man', 'thor', 'antman']

const herosResult = heros.map((hero): string => {
    return `hero is ${hero}`;
})

console.log(herosResult);

function printError(errorMessage: string): void {
    console.log(errorMessage);
}

function handleError(errorMessage: string): never {
    throw new Error(errorMessage);
}

handleError('NoCustAvailable');

export { }