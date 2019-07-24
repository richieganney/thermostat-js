describe ('Thermostat', function(){
    
    var thermostat;
    
    beforeEach(function(){
      thermostat = new Thermostat();
    });
    
    it('temperature starts at 20 degrees', function(){
      expect(thermostat.temperature()).toEqual(20)
    });

    it('can increase the temperature', function(){
      thermostat.increase(5);
      expect(thermostat.temperature()).toEqual(25)
    });
    
  });


// As a User
// So I can be warmer
// I want to increase the temperature on my thermostat