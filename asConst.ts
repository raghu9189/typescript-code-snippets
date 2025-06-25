/* 18

as const when applied to an object or array it makes them immutable (i.e. making them read-only). 
For other literals it prevents type widening.

const args = [8, 5] as const;

args[0] = 10; ❌ Cannot assign to '0' because it is a read-only property.
Few other advantages :

You can catch bugs at compile-time without running the program if you don't cast to a different type.
The compiler will not allow you to reassign properties of nested objects. */

const items = [1,2,3,4] as const;
const newItems = items.map((item) => item * 2)
console.log(newItems);


const myBookObj = {
    name: "Build Don't Talk",
    author: "Raj Shamani"
} as const

myBookObj['price'] = 499

console.log(myBookObj)

