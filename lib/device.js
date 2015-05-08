var Device = function (hidDevice) {
  this.hidDevice = hidDevice;
};

Device.prototype.sendCommand = function (red, green, blue) {
  var commandBuffer = [];

  commandBuffer[0] = 0x00;
  commandBuffer[1] = red;
  commandBuffer[2] = blue;
  commandBuffer[3] = green;
  commandBuffer[4] = 0; // 0 is stable, 70 is fast blink, 100 is medium blink
  commandBuffer[5] = 0x00;
  commandBuffer[6] = 0x40;
  commandBuffer[7] = 0x02;
  commandBuffer[8] = 0xFF; // Did this turn it off? controlCode & 0xFF
    
  this.hidDevice.write(commandBuffer);
};

exports.Device = Device;