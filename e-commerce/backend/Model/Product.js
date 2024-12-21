const mongoose=require('mongoose')
// { id: 3, name: "Product 3", price: "$40", image: "https://via.placeholder.com/150" },
const ProductSchema=new mongoose.Schema({
    name:{
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
    }
})
const Product =mongoose.model("products",ProductSchema)
module.exports=Product;