const express=require("express")
const router=express.Router()
const addMiddleWare=require("../middleware/authMiddleware")
const Product=require("../models/Product")

router.post("/add",authMiddleware,async(req,res)=>{

})


router.get("/",async(req,res)=>{
    
})