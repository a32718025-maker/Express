const express=require("express");//function
const app=express();//object= execute a function

console.dir(app);// print this obj methods proper

let port=3000;//port are logical endpoints of a network connection that is used to exchange information between a web server and web client

app.listen(port,()=>{//method listen->made a web server for incoming api requestto listen them
    console.log(`app is listening on port ${port}`);
});

app.get("/",(req,res)=>{
    res.send("hello,i am root");
});
app.get("/apple",(req,res)=>{
    res.send("you contacted apple path");
});
app.get("/orange",(req,res)=>{
    res.send("you contacted orange path");
});

app.get("*",(req,res)=>{
    res.send("this page does not exist");
});

app.post("/",(req,res)=>{
    res.send("you sent a post request");
});


//app.use((req,res)=>{// giving response for all requests
   // console.log(req);
   // console.log("request recieved");
   // res.send("this is a basic response ");
   //res.send("<h1>fruits</h1><ul><li>apple</li><li>orange</li></ul>");
  // res.send({
    //name:"apple",
   // color:"RED"
  // });
//});