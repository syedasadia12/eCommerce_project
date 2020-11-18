const mongoose = require('mongoose');

const validationerrorsSchema = mongoose.Schema({
    validationErrors: { type: {}, required: true }
});


module.exports = mongoose.model('Validationerrors', validationerrorsSchema);