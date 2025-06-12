var User = {
    name: 'Raghu',
    email: 'raghu@gmail.com',
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: 'raghu', isPaid: false });
function createCourse() {
    return { name: 'Angular 18', price: 150000 };
}
console.log(createCourse());
