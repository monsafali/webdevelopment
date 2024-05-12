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
// let h1 = document.querySelector('h1');
// h1.style.backgroundColor = 'black'
// h1.style.color = 'white';


let links = document.querySelectorAll(".pubInfo a");
for(let i=0; i<links.length; i++){
    links[i].style.color = 'white'
}

for(link of links){
    link.style.backgroundColor = 'black'
}



// classlist

// let h1 = document.querySelector('h1');

// h1.classList.add('color')
// h1.classList.remove('color')
// h1.classList.contains('color')
// h1.classList.toggle('green')



// Adding element;
let new_para = document.createElement('p');
new_para.innerText = 'Welcome to a big game'

let box = document.querySelector('.box')
box.appendChild(new_para);

let new_btn = document.createElement('button');
new_btn.innerText = 'click me'
box.appendChild(new_btn)


// if i want to append a new text on exit element last then i use just append 

new_para.append(' only your work hard make you unqiue')
new_para.append(new_btn)
new_para.append(' for more click buton')

// if i want to append a new text on exit element start then i use just prepend 

box.prepend(new_para);


// if i want to append on my desired place whereever i need. this i used insertAdjacent(where, element);

let new_button = document.createElement('button');
new_button.innerText = 'submit';
let p = document.querySelector('p');
// p.insertAdjacentElement('beforebegin', new_button)
// p.insertAdjacentElement('afterbegin', new_button)
// p.insertAdjacentElement('beforeend', new_button)
p.insertAdjacentElement('afterend', new_button)



// How to removing Elements

// if we want to remove elemtn then we select their parents then remove from
// let body = document.querySelector('body')
let rm_btn = document.querySelector('button')
new_button.remove();