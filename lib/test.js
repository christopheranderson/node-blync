Blync = require('./blync');
var device = Blync.getDevice(0);
device.sendCommand(0, 255, 0);