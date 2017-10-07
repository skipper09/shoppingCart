const mongoose = require('mongoose');
const ProductSchema = require('./product');

const Schema = mongoose.Schema;

const StoresSchema = new Schema({
  name: String,
  description: String,
  products: [{
    type: Schema.Types.ObjectId,
    ref: "Products"
  }],
  _seller: {
    type: Schema.Types.ObjectId,
    ref: "Sellers"
  },
  image: String
});

const Stores = mongoose.model("Stores", StoresSchema);

module.exports = Stores;
