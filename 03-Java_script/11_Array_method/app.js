// For each method in array

let array = [1,2,3,4,5,6];

let print = function(arr){
    console.log(arr);
}

// array.forEach(print);

// array.forEach(function(arr){
//     console.log(arr)
// })

// we used forEach in arrow funciton
array.forEach((arr)=>{
    console.log(arr)
})

// we used it at ojbect in array

let arr = [
    {
        Name: "monsaf",
        marks: 23,
    },
    {
        Name: "laiba",
        marks: 78,
    },
    {
        Name: "ayesha",
        marks: 50,
    }
]

arr.forEach((student)=>{
    console.log(student.Name);
})



// Map 

let num = [2,4,5,6,8,10]
let double = num.map((element)=>{
    return element*2
})
console.log(double)






let studentgpa = [
    {
        Name: "monsaf",
        marks: 23,
    },
    {
        Name: "laiba",
        marks: 78,
    },
    {
        Name: "ayesha",
        marks: 50,
    }
]

let gpa = studentgpa.map((el)=>{
    return el.marks /10;
})
console.log(gpa)


// filter

let nums = [1,5,4,2,7,8,12,3,4,17,19,20];
let ans = nums.filter((el)=>{
    return el %2 == 1;
})


// every Method
// [2,4,6,8,10].every((el) => el%2==0);


// Some

// [2,4,6,8,10].some((el) => el%2==0);


