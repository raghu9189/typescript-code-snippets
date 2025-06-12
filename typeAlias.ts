type User = {
    name: string;
    email: string;
    isActive: boolean;
}

function createCustUser(user: User): User {
    return user;
}
console.log(createCustUser({ name: 'Raghu', email: 'raghu@gmail.com', isActive: true }));

export { }
