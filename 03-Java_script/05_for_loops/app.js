// for (let i=1; i <= 4; i++){
//     console.log(`welcome to a big game ${i}`);
// }



// for (let x= 11; x>=1; x = x - 2 ){
//     console.log(x)
// }


// print odd number

// for (let i = 100; i>= 0;  i--){
//     if (i%2 == 0){
//         console.log(`odd number ${i}`)
//     }
// }


// another method we have

// for (let i = 1; i<= 10; i = i+2){
//     console.log(`odd number ${i}`)
// }





//  infinite loops
// for (let i =1; i>=0; i++){
//     console.log("something")
// }

// this is another example

// for (let i=1; i<= 5; i++){
//     console.log('something')
// }
// for (let i=1; ; i++){
//     console.log('something')
// }

// print multiplication table

function table (table_number){

let max = table_number *10;

for (let i=1; i<= max; i++){
    let table = table_number * i;
    console.log(table)
    if (table === max)
    break;
}
}
// console.log(table(8));


// let number = parseInt(prompt('enter any number'));
// for (let i=number; i<=number*10; i=i+number){
//     console.log(i)
// }


// nested loops

for (let i=1; i<=3; i++){
    console.log(`the value ${i}`)
    for(let x=1; x<=5; x++){
        console.log(x)
    }
}


