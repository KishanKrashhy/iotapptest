const SensorDao = require('./dao/SensorDao');

module.exports = wsRead = {
    getApiAndEmit: async (socket) => {
        try {
            const devices = await SensorDao.getDevices();
            socket.emit("FromAPI", { devices });
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    },
    UpdateDataSet: async (socket) => {
        try {
            //console.log(SensorDao.isStateUpdate());
            let devices = await SensorDao.getDevices();
            socket.emit('stateUpdate', { devices });
        } catch (error) {
            console.log(error);
        }
    }
}