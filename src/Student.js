import {Person} from './Person';

class Student extends Person {
    constructor(name){
        super(name)
        this.job = "Student"
    }
    work(){
        console.log(`${this.name} Studying.`)
    }
}

export { Student }