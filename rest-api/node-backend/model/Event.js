const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Event = new Schema({
    name:{
        type:String,
    },
    date:{
        type:Date,
    },
    time:{
        type:time,
    }
},
{
  collection:'books'
})


module.exports = mongoose.model('Event',Event)