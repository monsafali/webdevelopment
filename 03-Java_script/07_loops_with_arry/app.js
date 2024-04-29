// let fruit_array = ["mango","Appley","Banana","Cherry","Orange"];
// for (let i=0; i<fruit_array.length; i++){
//    console.log(i,fruit_array[i]);
// }

// for (let i=fruit_array.length-1; i>=0; i--){
//    console.log(i,fruit_array[i]);
// }



// let nested_array = [["Monsaf","Ali","kaaml"],["Mustaf","kamal","Pasha"],["Ali","Akbar"]];
// for (let i=0; i<nested_array.length; i++){
//    console.log(i, nested_array[i],nested_array.length);
//    console.log(`List :${i}`);
//    for (let x=0; x< nested_array[i].length; x++){
//       console.log(`x=${x}, ${nested_array[i][x]}`)
//       // console.log(nested_array[i][x]);
//    }
// }


// Example no 2



// let student = [ 
//    ["Ayesa",58], ["Iqrar",78],["khadija",89], ["laiba",100]
// ]

// for (let i =0; i< student.length; i++){
//    console.log(`LIst NO: ${i}` )
//    for (let j=0; j<student[i].length; j++){
//       console.log(student[i][j])
//    }
// }



// for Of Loops

// let fruit_array = ["mango","Appley","Banana","Cherry","Orange"];
// for (fruit of fruit_array){
//    console.log(fruit)
// }

// for (char of "Welcome to a big game"){
//    console.log(char);
// }

// let student = [ 
//        ["Ayesa",58], ["Iqrar",78],["khadija",89], ["laiba",100]
//     ]

// for (stu of student){
//    for(Name of stu){
//       console.log(Name);
//    }
// }




let todo = [];
let user = prompt('Enter a todo what you want');

while (true) {
   if (user === "quit") {
      console.log('quitting app');
      break;
   } else if (user === "list") {
      console.log("---------------------");
    for(let i=0; i<todo.length; i++){
      console.log(i, todo[i])
    }
      console.log("---------------------");
   } else if (user === "add"){
      task = prompt('enter task name you want to add');
      todo.push(task);
      console.log('task added successfully');
   } else if(user === "delete"){
      let idx = prompt('please enter the idx number you want to delete');
      todo.splice(idx, 1)
      console.log('task delted')
   } else {
      console.log('wrong entity request')
   }
   user = prompt('Enter a todo what you want'); // Asking for input inside the loop
}
