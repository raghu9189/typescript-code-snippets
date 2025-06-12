class User {

    private _courseCount = 1;
    constructor(public name: string, public email: string) { }

    get courseCount(): number {
        return this._courseCount;
    }

    set courseCount(courseCountNum: number) {
        this._courseCount = courseCountNum;
    }
}

const myObj = new User('Raghu', 'raghu@gmail.con');
console.log(myObj.courseCount);
myObj.courseCount = 45;
console.log(myObj.courseCount);
