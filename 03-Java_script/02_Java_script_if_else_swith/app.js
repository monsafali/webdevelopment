// Arithmetic Operators
// let a = 5;
// let b = 5;
// console.log(a+b);
// console.log(b-a);
// console.log(b/a);
// console.log(a*b);
// console.log(a**b);
// console.log(a%b);

// console.log(a++);
// console.log(++a);


// Comparition opener

// let x = 11;
// let y = 23;
// console.log(x>y)
// console.log(x>=y)
// console.log(x<y)
// console.log(x<=y)
// console.log(x==y)
// console.log(x!=y)


// Comparison for non Number


// console.log('a' < 'b');


// condition statement
// console.log('before my if statement')
// let age = 18;
//  if(age>= 18){
//     console.log('you are eligible casting vote')
//     // you can write multiple condition
//  }
//  console.log('after my if statement')



// if condition

// let color = 'green'

// if(color ==='red'){
//     console.log('stop');
// }

// if(color === 'yellow'){
//     console.log('slow down')
// }

// if (color === 'green'){
//     console.log('go fast')
// }

// else if


// let age = 17;
// if (age >= 18){
//     console.log('you can vote')
// } else if (age < 18){
//     console.log('you can not vote')
// }



// let marks = prompt('enter your marks');
// if (marks >= 80){
//     console.log('A+')
// } else if  (marks >= 60){
//     console.log('B+')
// } else if (marks >= 40){
//     console.log('Pass')
// } else  if (marks <= 33) {
//     console.log('fail fails')
// }


// else statement
// let colour = prompt('enter your color name');
// if (colour === 'red'){
//     console.log('danger');
// }
// else if (colour === 'green') {
//     console.log('peace')
// }
// else {
//     console.log('not valid colour please type again ')
// }


// calculator

// let first_number = parseInt(prompt('enter your first number'));
// let second_number = parseInt(prompt('enter second number'));
// let task = prompt('+,-,/,*,**,%');

// if (task == '+'){
//     console.log(first_number + second_number);
// } else if (task === '-'){
//     console.log(first_number-second_number);
// } else if (task === '/'){
//     console.log(first_number/second_number);
// } else if (task === '*'){
//     console.log(first_number*second_number);
// } else if  (task === '**'){
//     console.log(first_number**second_number);
// } else if (task ===  '%'){
//     console.log(first_number % second_number);
// } else {
//     console.log('invalid task')
// }




// nested if else statements


// let marks = parseInt(prompt('enter your parks'))

// if (marks >= 33){
//     console.log('pass')
//     if (marks >= 80){
//         console.log('Grade A+')
//     } else {
//         console.log('grade A')
//     }


// }else {
//     console.log('try again next time ')
// }



// logical operator

// console.log((5>3) && (3>1));

// logical operator only return true value when both value are true


// let marks = parseInt(prompt('enter your parks'))

// if (marks >= 33 || marks >= 80){
//     console.log('congratualation you achive first position')
// }




// Logical Not operator 
let marks = parseInt(prompt('enter your parks'))

if ((marks >33 && marks <= 80 )|| !false){
    console.log('pass')
}