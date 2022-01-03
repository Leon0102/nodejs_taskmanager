const mongoose = require('mongoose');


const TaskSchema = new mongoose.Schema({
    name : { type: String, required: [true, 'mus have name'], trim: true, maxLength:[100,'can not be mor than 100 characters'] },
    completed : { type:Boolean, default: false},
});


module.exports = mongoose.model('Task', TaskSchema);
