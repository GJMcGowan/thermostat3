$(document).ready(function(){
  
  var thermostat = new Thermostat();
  
  $('#temperature').text(thermostat.temperature);
  $('#up').click(function(){
    thermostat.up();
    $('#temperature').text(thermostat.temperature);
  });
  $('#down').click(function(){
    thermostat.down();
    $('#temperature').text(thermostat.temperature);
  });
});

var Thermostat = function() {
  this.temperature = 20;
  this.powersaving = true;
  this.tempColour = "Yellow";
};

Thermostat.prototype.up = function(){
  if(this.temperature === 25 && this.powersaving){
    throw new Error('Max 25 degrees when powersaving is on');
  };
  if(this.temperature === 32){
    throw new Error('Max 32 degrees when powersaving is off');
  };
  this.temperature ++;
  this.colour();
};

Thermostat.prototype.down = function(){
  if(this.temperature === 10){
    throw new Error('10 is the minimum'); 
  };
  this.temperature --;
  this.colour();
};

Thermostat.prototype.resetTemp = function(){
  this.temperature = 20;
};

Thermostat.prototype.colour = function(){
  if(this.temperature < 18){
    this.tempColour = "Green";
  };
  if(this.temperature >= 18 && this.temperature <= 25){
    this.tempColour = "Yellow";
  };
  if(this.temperature > 25){
    this.tempColour = "Red";
  };
};