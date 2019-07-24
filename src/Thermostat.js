function Thermostat() {
  this._temperature = 20;
  this._minimumTemperature = 10;
  this._powerSaver = true;
};

Thermostat.prototype.temperature = function() {
  return this._temperature
};

Thermostat.prototype.increase = function(increaseAmount) {
  if(this._temperature + increaseAmount > 25 && this._powerSaver === true) {
    throw new Error("Warning! power saving mode on: max temp is 25 degrees");
    }
  return this._temperature = this._temperature + increaseAmount
};

Thermostat.prototype.decrease = function(decreaseAmount) {
  if(this._temperature - decreaseAmount < this._minimumTemperature) {
    throw new Error("Warning! It's getting nippy in here");
  }
  return this._temperature = this._temperature - decreaseAmount
};
