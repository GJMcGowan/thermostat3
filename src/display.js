$(document).ready(function(){
  
  var thermostat = new Thermostat();
  
  $('#temperature').text(thermostat.temperature);

  $('#up').click(function(){
    thermostat.up();
    $('#temperature').text(thermostat.temperature);
    $('#temperature').css("color", thermostat.tempColour);
  });

  $('#down').click(function(){
    thermostat.down();
    $('#temperature').text(thermostat.temperature);
    $('#temperature').css("color", thermostat.tempColour);
  });

  $('#reset').click(function(){
    thermostat.resetTemp();
    $('#temperature').text(thermostat.temperature);
    $('#temperature').css("color", thermostat.tempColour);
  });

  $('#powersaving').change(function(){
    if (thermostat.powersaving) {
      return thermostat.powersaving = false; 
    };
    thermostat.powersaving = true;
  });
});