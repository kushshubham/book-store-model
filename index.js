const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const bookRouter = require("./routes/book.route.js");
const userRouter = require("./user-routes/user.route.js");  
app.use(express.json());


const router  =  express.Router();

app.get("/",(req, res) => {
    res.send("Server is running on port 3000");
})

app.use("/books",bookRouter)

app.use("/users",userRouter)


mongoose.connect("mongodb+srv://shubham18kushwaha:cwnEwBuStO0YzoJX@backendbook.ucqxb.mongodb.net/Book-Store1?retryWrites=true&w=majority&appName=BackendBook") 
.then(() => {
    console.log("connected to database"); 
    app.listen(port,()=>{
        console.log("Server is running on port 3000");
    })

    
}).catch((error) => {
    console.error("error connecting to database",error);
})



