const express=require('express')
const router=express.Router();
const Cart=require("../Model/cart")

router.get('/all',async(req,res)=>{
    try{
        const fetchprojects=await Cart.find()
        res.json(fetchprojects).status(200)
    }
    catch(error){
        res.json(error).status(500)
    }
})

router.post('/add',async(req,res)=>{
    try{
        const newprojects=new Cart(req.body)
        const savedata=await newprojects.save()
        res.status(201).json(savedata)
    }
    catch(error)
    {
        console.log(error)
    }
})
router.delete('/delete/:id',async(req,res)=>{
    try {
        const id=req.params.id
        await Cart.findByIdAndDelete({_id:id})
        res.status(200).json("deleted")
    } catch (error) {
        res.json(error)
    }
})
module.exports=router;