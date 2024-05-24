// let Json_Data = {
//     "fact": "The claws on the cat’s back paws aren’t as sharp as the claws on the front paws because the claws in the back don’t retract and, consequently, become worn.",
//     "length": 155
//   }
// // let valid_Json = JSON.parse(Json_Data);
// // console.log(valid_Json.fact)



// let students = {
//     name: "monsafali",
//     age: 25,
//     class: "devops"
// }
// console.log(JSON.stringify(students))



// Our First Api

// let url = "https://catfact.ninja/fact";
// fetch(url).then((res)=>{
//   console.log(res);
//   return res.json();
// }).then((data)=>{
//   console.log("data 1 is=",data.fact)
//   return fetch(url);
// })
// .then((res)=>{
//   return res.json();
// }).then((data2)=>{
//   console.log("data 2 is =",data2.fact)
// })

// .catch((err)=>{
//   console.log("Erro", err)
// })

// console.log('i am happy')



// api with async await funciton
let url = "https://catfact.ninja/fact";
async function getFacts() {
 try{
  let res = await fetch(url);
  let data = await res.json()
  console.log(data.fact)


  let res2 = await fetch(url);
  let data2 = await res2.json()
  console.log(data2.fact)
 } catch(err){
  console.log('Something Hapenning wrong with',err)
 }
}