const myBook: {name: string, author: string, price: number, isStockAvailable: boolean} = {
    name: "Build Don't Talk",
    author: "Raj Shamani",
    price: 499.00,
    isStockAvailable: true
}

console.log(myBook['name']) // bracket subscript
console.log(myBook.author) // . operator
