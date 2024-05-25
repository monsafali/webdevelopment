let btn = document.querySelector('button');


btn.addEventListener("click",  async ()=>{
    let facts = await getFacts();
    console.log(facts);
    let p = document.querySelector("#result");
    p.innerText = facts;
})



let url = "https://catfact.ninja/fact";


async function getFacts(){
    try{
        let res = await axios.get(url);
        // console.log(res.data.fact);
        return res.data.fact;
    } catch(err){
        console.log('caught and error:', err);
        return "No Fact found";
    }
}




// Dog api


let url2= "https://dog.ceo/api/breeds/image/random";
let btn2 = document.querySelector('#btn');

btn2.addEventListener("click", async() => {
    let link =  await getImage();
    // console.log(link)
    let image = document.querySelector("#Img_res");
    image.setAttribute("src", link);
    
});

async function getImage(){
    try{
        let res = await axios.get(url2);
        console.log(res.data.message);
        return res.data.message;
    }catch(err){
        console.log("error :",err);
        return "/";
    }
}



