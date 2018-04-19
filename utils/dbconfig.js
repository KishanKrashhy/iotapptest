const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const config = require('../config');
mongoose.connect('mongodb://'+config.databaseConfig.host+'/'+config.databaseConfig.database+'', (err)=>{
    if(err){
        console.error.bind(console, 'connection error:');
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