const mongoose = require('mongoose');

const errorsSchema = mongoose.Schema({
    errorslist: { type: {}, required: true }
});


module.exports = mongoose.model('Errors', errorsSchema);