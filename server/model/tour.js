var mongoose = require('mongoose');

var tourSchema = mongoose.Schema({
    title: { type: String, required: true, index: { unique: true } },
    detail: { type: String, required: true},
    type: { type: String, required: true },
    region: { type: String, required: true },
    province: { type: String, required: true },
    cost: { type: Number, required: true },
    date: { type: Date, required: true },
    days: { type: Number, required: true},
    dateAdded: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Tour', tourSchema);