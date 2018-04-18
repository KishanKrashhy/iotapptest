const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://127.0.0.1:27017/iottest', (err)=>{
    if(err){
        console.log(`cannot connect to the database due to ${err}`);
    }
    else {
        console.log('connected, DB is ready..');
    }
});

//creating schema

//var stateSchema = new Schema({name});

var deviceSchema = new Schema({
    name : String,
    states : [],
    updated : String
})

var Devices = mongoose.model('Devices', deviceSchema);

module.exports = Devices;