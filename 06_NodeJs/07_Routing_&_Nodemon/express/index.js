const express = require("express");
const app = express();

console.dir(app)



// This is the app fucntion also have many more
let port = 8080;

app.listen(port, ()=>{
    console.log(`app listening or port ${port}`);
})
app.get("/", (req,res) =>{
    res.send('you contacted root path hellow i am root')
})

app.get("/apple", (req,res) =>{
    res.send('you contacted apple path ')
})


app.get("/orange", (req,res) =>{
    res.send('you contacted orange path')
})

app.get("*", (req, res) =>{
    res.send("this page doesn't exist")
})

app.post("/", (req,res) =>{
    res.send('you send a post request to root')
})


// if we need to send a response to the server

// app.use((req, res)=>{ //req and res by default parameter
//     // console.log(req)
//     console.log('new incoming request. ')
//     // res.send({
//     //     name:"monsaf",
//     //     age: 25
//     // })
//     let code = "<h1>Fruits<ul><li>Applie</li> <li>banana</li><li>cherry</li></ul></h1>"
//     res.send(code)
// })