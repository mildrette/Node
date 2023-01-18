class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greetings(){
        console.log(`my name is ${this.name},and I am ${this.age} old.`);
    }
}

module.exports= Person;