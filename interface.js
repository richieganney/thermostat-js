$(document).ready(function() {
    var thermostat = new Thermostat();
    $('#temperature').text(thermostat._temperature);

    $('#temp-up').on('click', function() { // event listener
        thermostat.increase(1); // update model
        $('#temperature').text(thermostat._temperature); // update view
    });

    $('#temp-down').on('click', function() { // event listener
        thermostat.decrease(1); // update model
        $('#temperature').text(thermostat._temperature); // update view
    });

    $('#temp-reset').click(function() {
      thermostat.reset();
      updateTemperature();
    });

    $('#powersaving-on').click(function() {
      thermostat.powerSaverOn();
      $('#power-saving').text('on')
      updateTemperature();
    })

    $('#powersaving-off').click(function() {
      thermostat.powerSaverOff();
      $('#power-saving').text('off')
      updateTemperature();
    })

    function updateTemperature() {
      $('#temperature').text(thermostat.temperature);
      $('#temperature').attr('class', thermostat.checkUsage());
    };

    $('#current-city').change(function() {
      var city = $('#current-city').val();
      $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp)
      })
    })

});

