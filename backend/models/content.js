const mongoose = require('mongoose');

const contentSchema = mongoose.Schema({
    siteTitle: { type: String, required: true },
    sitePage: [{ 
        pageName: {type: String },
        pageHeader: {type: String }
    }],
    slider: [{ 
        title: {type: String },
        caption: {type: String },
        url: {type: String }
    }],
    productPage: {
        sidebar: {
            header: {type: String },
            subheader: [{type:String}]
        },
        rightSide: {
            header: {type: String },
            subheaders: [{type:String}]
        }
    }
});


module.exports = mongoose.model('Content', contentSchema);