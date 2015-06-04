$(document).ready(function(){
  
  var thermostat = new Thermostat();
  
  $('#temperature').text(thermostat.temperature);
  $('#powersavingOn').text(thermostat.powersaving);

  var updateColor = function(){
    $('#temperature').text(thermostat.temperature);
    $('#temperature').css("color", thermostat.tempColour);
  };

  $('#up').click(function(){
    thermostat.up();
    updateColor();
  });

  $('#down').click(function(){
    thermostat.down();
    updateColor();
  });

  $('#reset').click(function(){
    thermostat.resetTemp();
    updateColor();
  });

  $('#powersaving').change(function(){
    if (thermostat.powersaving) {
      thermostat.powersaving = false; 
    } else {
      thermostat.powersaving = true;
      thermostat.powerSave();
      updateColor();
    };
    $('#powersavingOn').text(thermostat.powersaving);
  });
});