const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
   company: {
   type: String,
  
  },
  company_id: {
    type: String,
   
   },
  product_name: {
   type: String,
   
  },
  image: {
   type: String,
   
  },
  description: {
   type: String,
  },
  star_rating: {
   type: Number,
  },
  price:{
    type: Number,
  },
  stock:{
    type: Number,
  }
});

module.exports = mongoose.model("Product", ProductSchema);