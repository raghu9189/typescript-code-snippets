
const dcHeros: string[] = []; // initialization with empty array
const heros: string[] = ['thor', 'spriderman', 'iron man'];
const tollyHeros: Array<string> = [];
dcHeros.push('superman');
heros.push('hawkeye');
tollyHeros.push('prabhas')

type superHeros = {
    name: string;
    powerLevel: number;
    isImmortal: boolean;
}

const mySuperHeros: superHeros[] = [];

mySuperHeros.push({ name: 'iron man', powerLevel: 3, isImmortal: true });
console.log(dcHeros);
console.log(tollyHeros);
console.log(mySuperHeros);

export { }
