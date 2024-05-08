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
let arr = [2,3,3,23,23,43,3,34];
let max = -1;
for(let i=0; i<arr.length; i++){
    if(max < arr[i]){
        max = arr[i];
    }
}
// console.log(max);
// using reduced method
let maximum = arr.reduce((min, max)=>{
    if(min>max){
        return min;
    }else {
        return max;
    }          
})



[20,40,30,20,10].every((el) => el%10==0);




