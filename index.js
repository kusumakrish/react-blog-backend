const express = require("express");
const app = express();
const detailsController = require("./router/data");

var port = process.env.PORT||8000 ;


app.use("/api",detailsController)

app.listen( port ,function(){
    console.log("server running");
})
