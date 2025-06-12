import { calcAdd } from "./ClassA"; // export { calcAdd }
import calcSub from "./DefaultClass"; // export default

const myRes = calcAdd(25, 65);
const myResSub = calcSub(50, 25);
console.log(myRes);
console.log(myResSub);
