function Thermostat() {
  this._temperature = 20;
  this._minimumTemperature = 10;
};

Thermostat.prototype.temperature = function() {
  return this._temperature
};

Thermostat.prototype.increase = function(increaseAmount) {
  return this._temperature = this._temperature + increaseAmount
};

Thermostat.prototype.decrease = function(decreaseAmount) {
  if(this._temperature - decreaseAmount < this._minimumTemperature) {
    throw new Error("Warning! It's getting nippy in here");
  }
  return this._temperature = this._temperature - decreaseAmount


};
