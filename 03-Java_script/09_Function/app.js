function hellow(){
    console.log('Hello World how are you')
}

// hellow();


function print1to5(){
    for(let i=0; i<5 ;i++){
        console.log(i)
    }
}
// print1to5();

function isAdult(){
    let age = 18;
    if(age >= 18){
        console.log('adult')
    }else {
        console.log('not adult')
    }
}

// isAdult()



// function with argument


function gretting(name, age){
    console.log(`hi ${name} how are you. you are ${age} old. nice to meet you`);
}
// gretting('monsaf',25);
// gretting('laiba',23);
// gretting('ayesha',28);



// Return

function sum(a,b){
    return a +b;
}

// let three = sum(sum(3,3),3);
// console.log(three)
// console.log(sum(3,3));

function isadult(age){
    if(age >= 18){
        return 'Adult';
    } else {
        return "not_adult"
    }
}

// console.log(isadult(12))
// console.log(isadult(19))





// Scope 
// Function Scope

function calsum(a,b){
    let sum = a+b;
    console.log(sum)
}
// console.log(calsum(1,2));


// Block Scope
{
    const a = 23;
}
// console.log(a)


let age = 23;
if(age>18){
    let str = 'Adult';
}
// console.log(str) //in this way we face error because str in not defiend it defined inside the bloc



// lexical Scope

function outerfunc(){
    let x =23;
    let y =5;
    function innerfunch(){
        let a = 11;
        console.log(x)
        console.log(y)
    }
    console.log(a)
    innerfunch();
}



let great = "hellow";
function ChangeGreet(){
    let great = "Asllamaoalikum";
    // console.log(great);
    function innerGreat(){
        console.log("Monsaf",great);
    }
    innerGreat()
}

// console.log(great);
// console.log(ChangeGreet());
// console.log(innerGreat());


// Function Expression
let sum2 = function(a,b){
    console.log(a+b)
}
console.log(sum2(11,11));



// higher order funtion


function multiplegreet(fun, n){
    for(let i=1; i<n; i++){
        fun()
    }
}
function big(){
    console.log('Welcome to a big game')
}

// console.log(multiplegreet(big, 10))


// Higher order Function
// Return a Function

let odd = function(n){
    console.log(!(n%2 == 0));
}

let even = function(n){
    console.log(n%2 == 0);
}



function oddeveTest(request){
    if(request === "odd"){
        let odd = function(n){
            console.log(!(n%2 == 0));
        }
        return odd;
    }
    else if(request === "even"){
        let even = function(n){
            console.log(n%2 == 0);
        }
        return even;
    }
     else{
        console.log('wrong request')
    }
}

let request = "odd";




// One MOre example


// console.log(double(4));
// console.log(add_2(4));

let map = function (func, list){
    let output = [];
    for(idx in list){
        output.push(func(list[idx]));
    }
    return output;
}

let add_2 = function (x){
    return x +2;
 }

 let double = function (x){
    return x*2;
 }

map(add_2,[5, 6, 7]);
map(double, [5, 6, 7]);




// Methods

const calculator = {
    num: 88,
    add: function(a,b){
        return a+b;
    },
    sub: function (a,b){
        return a-b;
    },
    multiply: function(a,b){
        return a*b;
    },
    devidided: function(a,b){
        return a/b
    }
}

 calculator(add(2,3));


// This is the shorthand of declaring function
const calculator2 = {
    add(a,b){
        return a+b
    },
    sub(a,b){
        return a-b
    },
    multiply(a,b){
        return a*b,
    }
}