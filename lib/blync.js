var hid = require('node-hid');

var Device = require('./device.js');

var Blync = function(_vid, _pid, _interface) {
  this._openedDevices = [];
  
  this.getDevices = function ()
  {
    var devices = hid.devices();

    devices = devices.filter(function (dev) {
      return dev.vendorId === (_vid || 4400) && dev.productId === (_pid || 1) && dev.interface === (_interface || 1);
    });

    return devices;
  };

  this.getDevice = function (index, _vid, _pid, _interface)
  {
    index = +index || 0;

    var devices = this.getDevices();
    if (index < 0) {
      throw new Error("Invalid device index");
    }
    if (index >= devices.length) {
      throw new Error("Device index #"+index+" not found");
    }

    return devices[index];
  };
  
  this.openDevice = function (device) {
    if(!device.path) {
      throw new Error("No HID path specified on device");
      return;
    }
    
    return this.openedDevices = new Device(new hid.HID(device.path));
  }
};

module.exports = Blync;
