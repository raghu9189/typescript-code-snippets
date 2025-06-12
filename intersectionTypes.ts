type cityLocation = { x: number } & { y: number };

const locationOne: cityLocation = { x: 56, y: 67 };

type xData = cityLocation['x'];
const myX: xData = 89;
console.log(myX);
console.log(locationOne);