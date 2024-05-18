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


h1 = document.querySelector("h1");

function changeColor(color, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*5)+1;
            if(num >3){
                reject('promise was rejected')
            }
            h1.style.color = color;
            console.log(`color was changed to ${color}`);
            resolve('color changed');
        }, delay);
    });
}
async function demo(){
    try{
    await changeColor('red',1000);
    await changeColor('green',1000);
    await changeColor('blue',1000);
    await changeColor('yellow',1000);
    }
    catch(err){
      console.log("error caught")  
    }
    let a = 23
    console.log(a);
    console.log('new Number = ',a+3)
}