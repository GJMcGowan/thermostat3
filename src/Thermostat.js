var Thermostat = function() {
  this.temperature = 20;
  this.powersaving = true;
  this.tempColour = "Gold";
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
  this.colour();
};

Thermostat.prototype.colour = function(){
  if(this.temperature < 18){
    this.tempColour = "Green";
  };
  if(this.temperature >= 18 && this.temperature <= 25){
    this.tempColour = "Gold";
  };
  if(this.temperature > 25){
    this.tempColour = "Red";
  };
};