$(document).ready(function() {
    var thermostat = new Thermostat();
    $('#temperature').text(thermostat.temperature);
    
    $('#temp-up').on('click', function() { // event listener
        thermostat.increase(1); // update model
        $('#temperature').text(thermostat.temperature); // update view
    });

    $('#temp-down').on('click', function() { // event listener
        thermostat.decrease(1); // update model
        $('#temperature').text(thermostat.temperature); // update view
    });
  });



