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

// console.log('hellow')
// console.log('hellow')
// try{
//     console.log(a)
// }catch(error){
//     console.log("variable a doesn't exit")
//     console.log(error)
// }
// console.log('hello2')
// console.log('hello2')





// This is simple Function
// function sum (a,b){
//     return a+b
// }


// This is variable function or global function
// let sum = function(a,b){
//     return a+b
// }


// This is arrow funtion

let sum =(a,b)=>{
    return a+b
}

console.log(sum(23,3))

let cube =(n) => {
    return n*n*n;
}

let pow = (a,b) => {
    return a**b
}


//  Implicit return

const mul = (a,b)=> (
    a *b
)
console.log(mul(2,6))



// Set Timeout
// waiting for given second for specific Tesk
// console.log('Hi There')
// setTimeout( ()=>{
//     console.log('welcome to a big game');
// },4000);
// console.log('at apna college')



// Set Interval

// waiting for given second for specific Tesk

let id = setInterval( ()=>{
    console.log('welcome to a big game');
},2000);


let id2 = setInterval( ()=>{
    console.log('Only your work hard make you unique');
},2000);


// console.log(id);
// console.log(id2);

// you can stop setinterval function to first store it into one variable then that clear that variable like this: clearinterval(varible_name)








