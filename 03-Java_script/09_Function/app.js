function hellow(){
    console.log('Hello World how are you')
}

hellow();


function print1to5(){
    for(let i=0; i<5 ;i++){
        console.log(i)
    }
}
print1to5();

function isAdult(){
    let age = 18;
    if(age >= 18){
        console.log('adult')
    }else {
        console.log('not adult')
    }
}

isAdult()



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

console.log(isadult(12))
console.log(isadult(19))


