// Simple 
interface User {
    readonly dbId: number;
    email: string;
    userId: number;
    googleId?: string;
}

const raghu: User = {
    dbId: 22,
    email: 'h@h.com',
    userId: 1
};

console.log(raghu);

// with arrow function 
interface User2 {
    readonly dbId: number;
    email: string;
    userId: number;
    googleId?: string;
    startTrail(): string;
    // startTrail: () => string;

}

const mahesh: User2 = {
    dbId: 22,
    email: 'h@h.com',
    userId: 1,
    startTrail: () => "MESSAGE"
};
