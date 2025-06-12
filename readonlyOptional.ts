type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    credCardDetails?: number;
}

let myUser: User = {
    _id: '123',
    name: 'raghu',
    email: 'a@g.com',
    isActive: true
};

myUser.email = 'example@gmail.com';
console.log(myUser.email);


type CardNumber = {
    cardNumber: string
}

type CardDate = {
    cardDate: string
}

type CardDetails = CardNumber & CardDate & {
    cvv: number
}

