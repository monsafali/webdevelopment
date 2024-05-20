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
//     }function asyncFunc(){
//   return new Promise((resolve, reject) =>{
//     setTimeout(() => {
//       console.log('some data1')
//       resolve('success')
//     }, 3000);
//   })


// console.log('fetching data1')
// let p1 = asyncFunc();
// p1.then((res)=>{
//   console.log(res)
// })
    
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

// function getData(dataId,getNextdata){
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//           console.log('data', dataId)
//           resolve('success')
//           // reject('error accur')
//           if(getNextdata){
//             getNextdata();
//           }
          
//         },5000)
//   });
// }




//  promise .then & .cath


// const getPrmise = () =>{
//   return new Promise((resolve, reject) =>{
//     console.log('I am a promise')
//     // resolve('Success')
//     // Suppose if we reject the promise then
//     reject("network error")
//   });
// };

// let promise = getPrmise(); 

// promise.then((res)=>{
//   console.log('promises fullfiled',res)
// })

// promise.catch((err)=>{
//   console.log('rejected',err)
// })






// Promise chain

// function asyncFunc(){
//   return new Promise((resolve, reject) =>{
//     setTimeout(() => {
//       console.log('some data1')
//       resolve('success')
//     }, 3000);
//   })
// }

// function asyncFunc2(){
//   return new Promise((resolve, reject) =>{
//     setTimeout(() => {
//       console.log('some data1')
//       resolve('success')
//     }, 3000);
//   })
// }


// console.log('fetching data1')
// asyncFunc().then((res)=>{
//   console.log('fetching data2');
//   asyncFunc2().then((res)=>{});
// }); 



// Example 2 of promise chaing


// function getData(dataId){
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//           console.log('data', dataId)
//           resolve('success')
//          },2000)
//   });
// }
// getData(1).then((res)=>{
//   console.log(res)
//   getData(2).then((res)=>{
//     console.log(res)
//    })
//  })

// Actual promise chaing


// console.log('getting data1 ....')
// getData(1)
// .then((res)=>{
// console.log('getting data2 ....')
//   return getData(2); 
// })
// console.log('getting data3 ....')
// .then((res)=>{
//   return getData(3); 
// })
// .then((res)=>{
//   console.log(res);
// });


// Async Await


// async function hello(){
//   console.log("hello")
// }

// function api(){
//   return new Promise((resolve, reject)=>{
//     //if we want it should take break 2 second then we add it into setTimeout fuction
//     setTimeout(() => {
//       console.log('weather data');
//       resolve(200);   
//     }, 2000);
//   });
// }



// async function getWeatherData(){
//   await api(); //1st call
//   await api();
// }



// Example 2

function getData(dataId){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
          console.log('data', dataId)
          resolve('success')
         },2000)
  });
}

// Async-await
async function GetAllData(){
  console.log('Getting Data1')
  await getData(1);
  console.log('Getting Data2')
  await getData(2);
  console.log('Getting Data3')
  await getData(3);
  console.log('Getting Data4')
  await getData(4);
  console.log('Getting Data5')
  await getData(5);
  console.log('Getting Data6')
  await getData(6);
}




// IIFE Function


(async function(){
  console.log('Getting Data1')
  await getData(1);
  console.log('Getting Data2')
  await getData(2);
  console.log('Getting Data3')
  await getData(3);
  console.log('Getting Data4')
  await getData(4);
  console.log('Getting Data5')
  await getData(5);
  console.log('Getting Data6')
  await getData(6);
})();
