const ChairmanPerson = {
    name: 'raghu',
    age: 25,
    salary: 95000
};
console.log(ChairmanPerson);
const newChairman = structuredClone(ChairmanPerson);
newChairman.name = 'Raghu';

console.log(newChairman);
console.log(ChairmanPerson);
