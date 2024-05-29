const mongoose=require("mongoose");

const ListingSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  specialization: {
    type: String,
    required: true,
  },
  info: {
    type:String,
    required: true,
  },
  imageUrl:{
    type:String,
    default:"/assets/careconnectlogo1.png",
    set:(v)=>
    v===""
    ?"/assets/careconnectlogo1.png":v,
  },
  

});

const collection = mongoose.model("Doctor_Listing", ListingSchema);

module.exports = collection;