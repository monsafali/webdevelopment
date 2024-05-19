// async function

// async function great(){
//     throw "weak conntection"
//     return "hellow"
// }

// great()
// .then((result)=>{
//     console.log('promise was resolved');
//     console.log("result was",result);
// })
// .catch((err)=>{
//     console.log('promise was reject with erro', err);
    
// })


// Example 2
// let demo = async () => { //we can create anync with arrow function
//     return 5;
// }


// Await Keyword

// function getNum(){
//     return new Promise( (resolve, reject)=>{
//         setTimeout(()=>{
//         let Num1 = Math.floor(Math.random()*10)+1;
//         console.log(Num1)
//         resolve();
//         },1000);
//     })
// }

// async function demo(){
//     await getNum();
//     await getNum();
//     await getNum();
// }


// h1 = document.querySelector("h1");

// function changeColor(color, delay){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             let num = Math.floor(Math.random()*5)+1;
//             if(num >3){
//                 reject('promise was rejected')
//             }
//             h1.style.color = color;
//             console.log(`color was changed to ${color}`);
//             resolve('color changed');
//         }, delay);
//     });
// }
// async function demo(){
//     try{
//     await changeColor('red',1000);
//     await changeColor('green',1000);
//     await changeColor('blue',1000);
//     await changeColor('yellow',1000);
//     }
//     catch(err){
//       console.log("error caught")  
//     }
//     let a = 23
//     console.log(a);
//     console.log('new Number = ',a+3)
// }



// ______________________________________youtube shardha khapra____________________

// console.log('one')
// console.log('two')


// setTimeout(() => {
//     console.log('hellow how are you')
// }, 4000);

// console.log('three')
// console.log('four')


// function sum (a,b){
//     console.log(a+b);
// }

// function calculator (a,b, sumCalback){
//     sumCalback(a,b);
// }



// calculator(5,5,(a,b)=>{
//     console.log(a+b)
// })



// const hello = () =>{
//     console.log('hellow');
// };

// setTimeout(hello, 4000);




// nesting
// let age = 65;
// if(age> 18){
//     if(age>60){
//         console.log('senior')
//     } else{
//         console.log('non seniour')
//     } 
// }else{
//     console.log('not adult yet now')
// }


// Example 2

// for (let i=0; i<5; i++){
//     let str = "";
//     for(let j=0; j<5; j++){
//         str = str + j;
//     }
//     console.log(i,str)
// }




// function getData(dataId,getNextdata){
//   setTimeout(()=>{
//     console.log('data', dataId)
//     if(getNextdata){
//       getNextdata();
//     }
    
//   },2000)
// }


//  this is theCall back hell.............. back to back many function runs is n ot good way.


// getData(1,()=>{
//   console.log('getting dat2')
//   getData(2,()=>{
//     console.log('getting dat3')
//     getData(3,()=>{
//       console.log('getting dat4')
//       getData(4)
//     })
//   })
// });
 




// let promise = new Promise((resolve, reject)=>{
//   console.log('I am a Promise');
//   // resolve("success");
//   reject('some error occured')
// })

function getData(dataId,getNextdata){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
          // console.log('data', dataId)
          // resolve('success')
          reject('error accur')
          if(getNextdata){
            getNextdata();
          }
          
        },5000)
  });
}