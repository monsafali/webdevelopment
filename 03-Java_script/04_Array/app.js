let Student = ['monsaf','arslan','ayesha','laiba','ahmed']

// if i print the specific index number
console.log(Student[0]);

// if I change the specific index number value to another
Student[1] = "Saddique";

// if i print the whole lenght
console.log(Student.length);

// if i want to know this specific value store on which index number
console.log(Student.indexOf('ayesha'));


// if i want to add new item on the start of the array
Student.unshift('Ali Akbar','kaleem akbar');


// if i want to delete the first item or specific item index number
Student.shift();


// if i want to add new item to the end of the array i used push method
Student.push('Sheraz Naseer')


// While if want to delete last itme i used pop method
Student.pop()



// if i want to print the reverse order
let Number = [1,2,3,4,5,6,7,8,9]
let Reverse = Number.reverse()

// if i want to the specifice indexing value i can use slice.() method
let top_student = Student.slice(0,3);
Student.slice(2) //its means in the index 2 to onward remain commplete array


// if i want to concat two array in new one
let final = Student.concat(Number);


// if want to copies one array another name i used spread method
let copied = [...Student];


// splice method

let new_array = ['kamal','monsaf','faisal','abdullah'];
new_array.splice(0,2, "john","david");


