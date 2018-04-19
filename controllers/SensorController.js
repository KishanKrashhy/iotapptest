const express = require('express');
const router = express.Router();
var memoize = require("memoizee");
const SensorService = require('../services/SensorService');


router.get('/', (req, res)=>{
    console.log("this is the", req.query);
    let memoized = memoize(SensorService.getDevices);
    memoized().then(devices => {
        res.status(200).json(devices);    
    })
    .catch(err => {
        res.status(404).send({message : "Something went wrong"});
    });
    
});

router.get('/get', (req, res)=>{
    let id = req.query.id;
    let memoized = memoize(SensorService.getDevice);
    memoized(id).then(devices => {
        res.status(200).json(devices);    
    })
    .catch(err => {
        res.status(404).send({message : "Something went wrong"});
    });
    
});

router.put("/edit", (req, res)=>{
    let device = req.body.deviceobj;
    console.log(device)
    SensorService.editDevice(device).then(device => {
        res.status(200).json(device);
    })
    .catch(err => {
        res.status(404).send({message : "Something went wrong"});
    });
});

router.post("/add", (req, res)=>{
    SensorService.addDevices(req.body)
    .then(devices => {
        res.status(200).json({message : 'Device successfull added'});    
    })
    .catch(err => {
        res.status(404).send({message : "Something went wrong"});
    });
});

router.delete("/remove", (req, res)=>{
    let id = req.body.id;
    console.log("id passed:", id);
    SensorService.removeDevice(id)
    .then(device => {
        res.status(200).json({message : 'Device deleted'});
    }).catch(err => {
        res.status(404).send({message : "Something went wrong"});
    });
    
});
module.exports = router;