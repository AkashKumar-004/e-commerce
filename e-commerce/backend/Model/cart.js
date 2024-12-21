const mongoose=require("mongoose")

const cartschema=new mongoose.Schema({
    name:
    {
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    Categories:{
        type:String,
        required:true
    },
    quality:{
        type:String
    }
})
const Cart =mongoose.model("cart",cartschema)
module.exports=Cart;