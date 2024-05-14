// let btns = document.querySelectorAll('button');
// for(btn of btns){
//     btn.onclick = (()=>{
//         alert('submit successfully')
//     })

// onmouseenter
    // btn.onmouseenter = (()=>{
    //     alert('someone hacked you accounts')
    // })



    // addEventListener
//     btn.addEventListener("click",sayRight);
//     btn.addEventListener("click",sayWrong);
//     btn.addEventListener("dblclick",(()=>{
//         console.log('you clicked doubled')
//     }));
// }

// function sayRight (){
//     alert('All things going right')
// }

// function sayWrong(){
//     alert("Something went wrong")
// }





// Generate Random Color



// let btn = document.querySelector('button');
// btn.addEventListener('click',function(){
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//     h3.innerText = randomColor;


//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;


//     console.log('Color Updated')
// })

// function  getRandomColor(){
//     let red = Math.floor(Math.random()*255);
//     let green = Math.floor(Math.random()*255);
//     let blue = Math.floor(Math.random()*255);
 
//     let color = `rgb(${red},${green},${blue})`
//     return color;
// }




// <!-- add eventlistner on multi value -->

// let para = document.querySelector("p")
// para.addEventListener("click", function(){
//     console.log('paragraf was clicked')
// })

// let box = document.querySelector(".box");
// box.addEventListener('mouseenter',function(){
//     console.log('mouse inside box')
// })


// This in Event Listeners

// let btn = document.querySelector("button");
// let p = document.querySelector('p');
// let h1 = document.querySelector('h1');
// let h3 = document.querySelector('h3');

// btn.addEventListener("click",function(){
//     console.dir(this.innerText)
//     this.style.backgroundColor = "purple"
//     this.style.color = "white"
// })


// p.addEventListener("click",function(){
//     console.dir(this.innerText)
//     this.style.backgroundColor = "purple"
//     this.style.color = "white"
// })


// h1.addEventListener("click",function(){
//     console.dir(this.innerText)
//     this.style.backgroundColor = "purple"
//     this.style.color = "white"
// })


// h3.addEventListener("click",function(){
//     console.dir(this.innerText)
//     this.style.backgroundColor = "purple"
//     this.style.color = "white"
// })


// but above method is not soo good. we reduce code. look like small.so we optimized

// btn.addEventListener("click",changeColor)
// p.addEventListener("click",changeColor)
// h1.addEventListener("click",changeColor)
// h3.addEventListener("click",changeColor)

// function changeColor(){
//     console.dir(this.innerText)
//     this.style.backgroundColor = "purple"
//     this.style.color = "white"   
// }






// <!-- keyboard event -->
// let inp = document.querySelector('input')
// inp.addEventListener('keyup', function(event){ //keydown keyup keypresss
//     console.log("key is=",event.key)
//     console.log("code is =",event.code)
//     console.log('key was pressed')
// })


// let inp = document.querySelector('input')
// inp.addEventListener('keyup', function(event){ //Arrup ArrowDown, ArrowLeft, ArrowRight
//     console.log("code is =",event.code)
    // if(event.code == "ArrowUp"){
    //     console.log('character moves to forward')
    // } else if (event.code == "ArrowDown"){
    //     console.log('Character moves to backward')
    // } else if (event.code == "ArrowLef"){
    //     console.log('Character moves to Left')
    // } else if (event.code == "ArrowRight"){
    //     console.log('Character moves to Regght')
    // } else{
    //     console.log('wrong request')
    // }

//     if(event.code == "KeyU"){
//         console.log('character moves to forward')
//     } else if (event.code == "KeyD"){
//         console.log('Character moves to backward')
//     } else if (event.code == "KeyL"){
//         console.log('Character moves to Left')
//     } else if (event.code == "KeyR"){
//         console.log('Character moves to Regght')
//     } else{
//         console.log('wrong request')
//     }
// })







// let btn =document.querySelector('button');
// btn.addEventListener('click',function(event){
//     console.log(event)
//     console.log('button was clicked')
// })

// btn.addEventListener('dblclick',function(event){
//     console.log(event)
//     console.log('button was clicked')
// })





// Form Events

let form = document.querySelector('form')
form.addEventListener('submit', function(event){
    event.preventDefault();
    alert('form submited successfuly');
    console.log('submit successfully') 
});