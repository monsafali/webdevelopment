const student = {
    Name: "monsaf",
    Home: "Green City Fort abbas",
    age: 50,
    eng: 85,
    urdu: 65,
    math : 64,
    getavG() {
        console.log(this)
        let avg = (this.eng + this.urdu + this.math)/3;
        console.log(`${this.Name} got avg Marks = ${avg}`)
    }

}
// console.log(student.getavG())




function getavG() {
    console.log(this)
}


// Try and catch

// Sappose we have error as a not defined. if we don't apply try and cath. code struck here a not run after anything

console.log('hellow')
console.log('hellow')
try{
    console.log(a)
}catch(error){
    console.log("variable a doesn't exit")
    console.log(error)
}
console.log('hello2')
console.log('hello2')






