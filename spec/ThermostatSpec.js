describe('Thermostat', function(){

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('can change temperature', function(){

    it('can have a default temperature', function(){
      expect(thermostat.temperature).toEqual(20);
    });

    it('can increase the temperature with the up function', function() {
      thermostat.up();
      expect(thermostat.temperature).toEqual(21);
    });

    it('can decrease the temperature with down function', function() {
      thermostat.down();
      expect(thermostat.temperature).toEqual(19);      
    });

    it('can reset temperature to 20', function(){
      thermostat.temperature = 21;
      thermostat.resetTemp();
      expect(thermostat.temperature).toEqual(20);
    });

  });

  describe('can have max or min temperature', function(){

    it('has a minimum temperature of 10', function(){
      thermostat.temperature = 10;
      expect( function(){ thermostat.down(); } ).toThrow(new Error('10 is the minimum'));
    });

    it('has max temperature of 25, when powersaving is on', function(){
      thermostat.powersaving = true;
      thermostat.temperature = 25;
      expect( function(){ thermostat.up(); } ).toThrow(new Error('Max 25 degrees when powersaving is on'));
    });

    it('has max temperature of 32, when powersaving is off', function(){
      thermostat.powersaving = false;
      thermostat.temperature = 32;
      expect( function(){ thermostat.up(); } ).toThrow(new Error('Max 32 degrees when powersaving is off'));
    });

  });

  describe('can change the displays colour', function(){

    it('changes to green when temperature is below 18', function(){
      thermostat.temperature = 18;
      thermostat.down();
      expect(thermostat.tempColour).toEqual('Green');
    });

    it('changes to yellow when temperature rises over 18', function(){
      thermostat.temperature = 17;
      thermostat.tempColour = "Green";
      thermostat.up();
      expect(thermostat.tempColour).toEqual("Gold");
    });

    it('changes to yellow when temperature falls below 25', function(){
      thermostat.temperature = 26;
      thermostat.tempColour = "Red";
      thermostat.down();
      expect(thermostat.tempColour).toEqual("Gold");
    });

    it('changes to red when temperature rises above 25', function(){
      thermostat.powersaving = false;
      thermostat.temperature = 25;
      thermostat.up();
      expect(thermostat.tempColour).toEqual("Red");
    });

  });

});