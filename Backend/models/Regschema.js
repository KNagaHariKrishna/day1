const mongoose = require('mongoose');
const schema=mongoose.Schema
const mySchema = new schema({
    username: { type: String},
    age: { type: Number},
    mobnum: {type:Number},
    password:{type:String}
    // date: { type: Date, default: Date.now },
});
const MyModel = mongoose.model('reguser', mySchema);
module.exports = MyModel