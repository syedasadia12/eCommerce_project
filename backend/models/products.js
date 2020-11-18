
const mongoose = require('mongoose');

const productsSchema = mongoose.Schema({
  SubCategory: {
    type: String,
    required: true
  },
  Category: {
    type: String,
    required: true
  },
  SupplierName: {
    type: String,
    required: true
  },
  WeightMeasure: {
    type: Number,
    required: true
  },
  WeightUnit: {
    type: String,
    required: true
  },
  Description: {
    type: String,
    required: true
  },
  Name: {
    type: String,
    required: true
  },
  DateOfSale: {
    type: String,
    required: true
  },
  ProductPicUrl: {
    type: String,
    required: true
  },
  Status: {
    type: String,
    required: true
  },
  Quantity: {
    type: Number,
    required: true
  },
  CurrencyCode: {
    type: String,
    required: true
  },
  Price: {
    type: Number,
    required: true
  },
  deliveryPrice: {
    type: Number,
    default: 0
  },
  DateOfEntry: {
    type: Date,
    required: true
  },
});


module.exports = mongoose.model('Products', productsSchema);
