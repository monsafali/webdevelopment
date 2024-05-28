const base_url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/"



const dropdown = document.querySelectorAll(".dropdown select");
const btn = document.querySelector('form button')

const fromCurr = document.querySelector('.from select')
const toCurr = document.querySelector('.to select')



for (let select of dropdown){
    for (currCode in countryList){
        let new_option = document.createElement("option");
        new_option.innerText = currCode;
        new_option.value = currCode
        if(select.name === "from" && currCode === "USD"){
            new_option.selected = "selected"
        } else if(select.name === "to" && currCode === "PKR"){
            new_option.selected = "selected"
        }
        select.append(new_option);

    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    });
}



const updateFlag = (element) =>{
    let currCode = element.value;
    let country_code = countryList[currCode];
    let newSrc = `https://flagsapi.com/${country_code}/flat/64.png`;
    let img = element.parentElement.querySelector('img');
    img.src = newSrc;

}


btn.addEventListener("click", async (evt)=>{
    evt.preventDefault();
    let amount = document.querySelector('.amount input');
    let amtVal = amount.value;
    if(amtVal === ""|| amtVal <1){
        amtVal = 1;
        amount.value = "1"
    }
    // console.log(fromCurr.value, toCurr.value)
    const URL = `${base_url}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase}.json`
    let response = await fetch(URL);
    console.log(response)

})