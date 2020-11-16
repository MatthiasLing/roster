const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    username: String, 
    email: String,
    // title: String,
    // groups: Array,
})

module.exports = mongoose.model('User', User)