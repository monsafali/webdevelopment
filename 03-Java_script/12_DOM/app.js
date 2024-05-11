let imag = document.getElementById("mainImg");

let small_images = document.getElementsByClassName("oldimg");

// for (let i=0; i<small_images.length; i++){
//    small_images[i].src = "Assets/Spider-Man.png"
//    console.log(`value of image no. ${i} is changed`)
// }



// Query Selector

// let inside = document.querySelector('div a')
// console.dir(inside)

// let h1 = document.querySelector('h1');
// console.dir(h1);
// let mainImg = document.querySelector('#mainImg');
// console.dir(mainImg);
// let oldimg = document.querySelectorAll('.oldimg');
// console.dir(oldimg);




// Manipulating Attributes:


// let img = document.querySelector('img');
// let id_name = img.getAttribute('id');
// console.dir(id_name);
// let change_id_name = img.setAttribute('id','topimg');
// console.dir(change_id_name);



// manipulating style:
let h1 = document.querySelector('h1');
h1.style.backgroundColor = 'black'
h1.style.color = 'white';


let links = document.querySelectorAll(".pubInfo a");
for(let i=0; i<links.length; i++){
    links[i].style.color = 'white'
}

for(link of links){
    link.style.backgroundColor = 'black'
}