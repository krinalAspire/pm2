const express=require("express");
const app=express();
const morgan=require("morgan");

app.use(morgan("dev"));

app.get("/user-list", (req,res)=>{
    let result={
        id:1,
        name:"john doe"
    }
    console.log("USER-LIST API:-",process.env.DB_NAME);
    res.status(200).json(result);
})

app.get("/user-detail", (req,res)=>{
    let result={
        id:2,
        name:"mark johnsons"
    }
    console.log("USER-DETAIL API:-",process.env.DB_NAME);
    res.status(200).json(result);
})

app.listen(7070,()=>{
    console.log("server running at 7070");
})