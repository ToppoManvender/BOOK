const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Event = new Schema({
    name: {
        type: String,
    },
    dateTime: {
        type: Date, 
    },
},
{
    collection: 'Event'
});

module.exports = mongoose.model('Event', Event);
