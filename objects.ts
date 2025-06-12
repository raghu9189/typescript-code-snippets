const User = {
    name: 'Raghu',
    email: 'raghu@gmail.com',
    isActive: true
};

function createUser({ name: string, isPaid: boolean }) {
}

createUser({ name: 'raghu', isPaid: false });

function createCourse(): { name: string, price: number } {
    return { name: 'Angular 18', price: 150000 };
}
console.log(createCourse());
