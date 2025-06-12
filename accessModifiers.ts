class Animal {
    public name: string;
    private type: number;
    protected country: string;
}

class ApexPreditor extends Animal {


}
const myObj = new ApexPreditor();
const myVal = myObj.name;

