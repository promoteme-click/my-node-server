let express=require("express");
let app=express();
let cors=require("cors");
// MiddleWares
app.use(cors());
app.use(express.json())

let PORT=process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log("server is running");
})
