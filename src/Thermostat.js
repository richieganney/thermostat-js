function Thermostat() {
  this._temperature = 20;
};

Thermostat.prototype.temperature = function() {
  return this._temperature
};

Thermostat.prototype.increase = function(increaseAmount) {
  return this._temperature = this._temperature + increaseAmount
};

Thermostat.prototype.decrease = function(decreaseAmount) {
  return this._temperature = this._temperature - decreaseAmount
};
