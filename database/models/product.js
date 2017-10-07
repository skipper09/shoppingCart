const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
  name: String,
  price: Number,
  description: String,
  img: String,
  quantity: Number,
  department: String,
  keywords: Array,
});

const Products = mongoose.model("Products", ProductsSchema);

module.exports = Products;
