// For each method in array

// let array = [1,2,3,4,5,6];

// let print = function(arr){
//     console.log(arr);
// }

// array.forEach(print);

// array.forEach(function(arr){
//     console.log(arr)
// })

// we used forEach in arrow funciton
// array.forEach((arr)=>{
//     console.log(arr)
// })

// we used it at ojbect in array

// let arr = [
//     {
//         Name: "monsaf",
//         marks: 23,
//     },
//     {
//         Name: "laiba",
//         marks: 78,
//     },
//     {
//         Name: "ayesha",
//         marks: 50,
//     }
// ]

// arr.forEach((student)=>{
//     console.log(student.Name);
// })



// Map 

// let num = [2,4,5,6,8,10]
// let double = num.map((element)=>{
//     return element*2
// })
// console.log(double)






// let studentgpa = [
//     {
//         Name: "monsaf",
//         marks: 23,
//     },
//     {
//         Name: "laiba",
//         marks: 78,
//     },
//     {
//         Name: "ayesha",
//         marks: 50,
//     }
// ]

// let gpa = studentgpa.map((el)=>{
//     return el.marks /10;
// })
// console.log(gpa)


// filter

// let nums = [1,5,4,2,7,8,12,3,4,17,19,20];
// let ans = nums.filter((el)=>{
//     return el %2 == 1;
// })


// every Method
// [2,4,6,8,10].every((el) => el%2==0);


// Some

// [2,4,6,8,10].some((el) => el%2==0);


// let num1 = [1,2,3,4];
// let final_value = num1.reduce((res, el)=> res + el);
// console.log(final_value);



// find the maximum number from array
// let arr = [2,3,3,23,23,43,3,34];
// let max = -1;
// for(let i=0; i<arr.length; i++){
//     if(max < arr[i]){
//         max = arr[i];
//     }
// }
// console.log(max);



// using reduced method


// let maximum = arr.reduce((min, max)=>{
//     if(min>max){
//         return min;
//     }else {
//         return max;
//     }          
// })



// [20,40,30,20,10].every((el) => el%10==0);





// Default Value

// function sum(a,b =2, c=2){
//     return a+b+c;
// }

// sum(2,4);
// sum(5);




// spread
// let List = [3,1,4,345,5,345,4,34,3,4];
// let minimum = Math.min(...List)
// let Maximum = Math.max(...List)
// console.log(minimum)
// console.log(Maximum)

// let string = 'welcome to a big game';
// console.log(...string);






// how to used spread in object literals
// let data = {
//     name : "monsaf Ali",
//     Email: "monsafali272@gmail.com",
//     contact: +923116940272,
//     password: "abcd"
// }

// let datacopy = {...data, Id: 124}


// let array1 = [2,3,3,23,23,3,3223];
// let array2 = [...array1];
// let arr_to_object = {...array2};
// let object3 = {...'Monsaf'}


// RESt
// function sumvaue (...args){
//     for(let i=0; i<args.length; i++){
//         console.log('you give us:',args[i])
//     }
// }

// function min (a,b,c,d){
//     console.log(arguments);
//     console.log(arguments.length);
//     arguments.push(1);
// }


// function sum(...argu){
//     return argu.reduce((sum, el)=> sum + el);
// }







// Destructuring array

let names = ["Tonnay","Bruce","Steve","Peter","kamal","Monsaf","ali"];
// let winner = names[0];
// let runnerup = names[1];
// let secondrunnerup = names[2];


// we have  method to write above code in simple way

let [ winner, runnerup, ...others] = names;

// Destructiong object


const student = {
    Name: "Monsaf_ali",
    Age : 23,
    class: 14,
    Subject : ["computer","urdue","English","Pakstudie"],
    username : "kamal2211",
    password: "abcd",
//    city: "lahore"
}

// let username = student.username;
// let password = student.password;
// above method is not best practise we used it below code



// Suppose we want to creat new key name than we add value but it perform as a key when we  call. 
// incase we cannot give any city information we can add it to default whenever not define city it print by defaulty
let {username: user, password: secret, city: place="Fortabbas"} = student;