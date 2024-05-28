// let n = 5;


// for(let i=0; i<n; i++){
//     console.log('hello',i)
// }

// console.log('welcome to a big game')


// Process in Node

let args = process.argv;
for(let i=2; i<args.length; i++){
    console.log('hellow & welcome to', args[i])

}
