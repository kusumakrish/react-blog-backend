const express = require("express");
const app = express();
const detailsController = require("./router/data");

// app.get("/home", (req,res)=>{
//     res.send("home");
// })

app.use("/api",detailsController)

<<<<<<< HEAD
app.listen(process.env.PORT || 5050 ,function(){
=======
app.listen(process.env.PORT || 8080 ,function(){
>>>>>>> d6c4aefd7554904035966ba507e6bc2954d16458
    console.log("server running");
})
