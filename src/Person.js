class Person {
    constructor(name){
        this.name = name
    }
    work(){
        console.log(`${this.name} has no job to`)
    }
}

export { Person }