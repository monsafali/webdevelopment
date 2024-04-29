// let i = 0 ;
// while(i <=10){
//    if (i==5){
//     continue
//    }
   
// }


const fav_movie = 'welcome';
let guess_movie = prompt('enter guess move');

while (guess_movie != fav_movie) {
   if (guess_movie == 'quite'){
      console.log('you quite');
      break;
   }
   guess_movie = prompt("wrong guess please try again");
   
} 
if (guess_movie == fav_movie){
   console.log('Congratulation you guess right')
} 



// let i = 1;
// while(i<5){

//    if (i ==3){
//       break;
//    }
   
//    console.log(i)
//    i++
// }
// console.log('we used break at 3')