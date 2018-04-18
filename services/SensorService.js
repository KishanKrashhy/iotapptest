const devices = require('../dao/SensorDao');
module.exports = SensorService = {
    getDevices: async() => {
        try {
            return await devices.getDevices();
        } catch (error) {
            Promise.reject(error);
        }
    },
    
    getDevice: async(id) => {
        try {
            return await devices.getDevice(id);
        } catch (error) {
            Promise.reject(error);
        }
    },

    addDevices: async(device) => {
        try {
            return await devices.addDevices(device);
        } catch (error) {
            console.log(error)
            return error;
        }
    },

    removeDevice : async(id) => {
       try {
           return await devices.removeDevice(id)
       } catch (error) {
        console.log(error)
        return error;
       }
    }, 

    editDevice : async(device) => {
        try {
            return await devices.updateDevice(device);
        } catch (error) {
            return error;
        }
    }
}