let score: number | string = 33;

score = 44;
score = "45";

type User = {
    name: string;
    id: number;
}

type Admin = {
    username: string;
    id: number;
}

let newUser: User | Admin = { name: "raghu", id: 12 };
newUser = { username: 'hc', id: 56 };

function getDbId(id: number | string) {
    if (typeof id === 'number') {
        console.log(id);
    }
    if (typeof id === 'string') {
        console.log(id);
    }
}
getDbId(56);

const data: number[] = [1, 2, 3, 4]; // only numbers
const data2: string[] = ['1', '2', '3', '4']; // only strings
const data3: string[] | number[] = ['1', '2', '3', '4']; // either string or numbers nut not both
const data4: (string | number)[] = [1, '2', '3', '4']; // both are allowed

let seatAllotment: 'luxury' | 'economy' | 'class-a';


