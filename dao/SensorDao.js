const Devices = require('../utils/dbconfig');
const config = require('../config');
module.exports = devices = {
    stateupdate : false,
    getDevices: async () => {
        try {
            let deviceList = [], devices = [];
            deviceList = await Devices.find({}, (err, devices) => {
                if (err) throw err;
            });
            deviceList.forEach((device) => {
                let obj = {};
                obj.name = device.name;
                obj.states = device.states;
                obj.updated = device.updated;
                obj._id = device._id;
                devices.push(obj);
            })
            return devices;
        } catch (err) {
            return Promise.reject(err);
        }
    },
    getDevice: async (id) => {
        try {
            let deviceList = {}, devices = {};
            deviceList = await Devices.findOne({_id : id}, (err, device) => {
                if (err) throw err;
            });

                devices.name = deviceList.name;
                devices.states = deviceList.states;
                devices.updated = deviceList.updated;
                devices._id = deviceList._id;
            return devices;
        } catch (err) {
            return Promise.reject(err);
        }
    },
    addDevices: async (device) => {
        try {
            let today = new Date();
            let date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
            let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            let dateTime = date+' '+time;
            device.updated = dateTime;
            let newDevice = new Devices(device);
            return await newDevice.save(err => {
                if (err) throw err;
                return device;
            });
        } catch (err) {
            console.log(err);
            return Promise.reject(err);
        }
    },
    removeDevice: async (id) => {
        try {
            return await Devices.findOneAndRemove({ _id: id }, function (err) {
                if (err) throw err;
                console.log('device removed successfully');
                return id;
            });
        } catch (error) {
            console.log(error);
        }
    },
    updateDevice: async (device) => {
        try {
            config.stateUpdate = true
            let today = new Date();
            let date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
            let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            let dateTime = date+' '+time;
            return await Devices.findOneAndUpdate({ _id: device._id }, { name: device.name, states: device.states, updated:dateTime }, (err, device) => {
                if (err) throw err;
                console.log(device);
            })
        } catch (error) {
            console.log(error);
        }
    },
    isStateUpdate : () => {
        return config.stateUpdate;
    }
}
