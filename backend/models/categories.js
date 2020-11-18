const mongoose = require('mongoose');

const categoriesSchema = mongoose.Schema({
    catId: { type: String, required: true },
    catName:  { type: String, required: true },
    catDesc: { type: String, required: true },
    subCat: { type: [], required: true }
});


module.exports = mongoose.model('Categories', categoriesSchema);