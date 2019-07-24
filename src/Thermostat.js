function Thermostat() {
  this._temperature = 20;
  this._minimumTemperature = 10;
  this.powerSavingOnMax = 25;
  this.powerSavingOffMax = 32;
  this._powerSaver = true;
};

Thermostat.prototype.temperature = function() {
  return this._temperature
};

Thermostat.prototype.increase = function(increaseAmount) {
  if(this._temperature + increaseAmount > this.powerSavingOnMax && this._powerSaver === true) {
    throw new Error("Warning! power saving mode on: max temp is 25 degrees");
    }
  if(this._temperature + increaseAmount > this.powerSavingOffMax && this._powerSaver === false) {
      throw new Error("Warning! max temp is 32 degrees");
    }
  return this._temperature = this._temperature + increaseAmount
};

Thermostat.prototype.decrease = function(decreaseAmount) {
  if(this._temperature - decreaseAmount < this._minimumTemperature) {
    throw new Error("Warning! It's getting nippy in here");
  }
  return this._temperature = this._temperature - decreaseAmount
};

Thermostat.prototype.powerSaverOff = function() {
  return this._powerSaver = false
};

Thermostat.prototype.powerSaverOn = function() {
  return this._powerSaver = true
};

Thermostat.prototype.reset = function() {
  return this._temperature = 20
};
