import {Person} from './Person';

class Teacher extends Person {
    constructor(name){
        super(name)
        this.job = "Teacher"
    }
    work(){
        console.log(`${this.name} Teaching.`)
    }
}

export { Teacher }