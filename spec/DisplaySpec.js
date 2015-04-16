describe('Display', function(){

  beforeEach(function(){
    thermostat = new Thermostat();
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('temperature_change.html');
    // jasmine.getStyleFixtures().fixturesPath = './public/css';
    // loadStyleFixtures('stylesheet.css');
    //setStyleFixtures('#temperature { color: yellow; }')
    $('#temperature').css('color','yellow');
  });

  it('displays the temperature', function(){
    expect('#temperature').toContainText('20');
  });

  it('can increase the temperature', function(){
    $('#up').click();
    expect('#temperature').toContainText('21');
  });

  it('can decrease the temperature', function(){
    $('#down').click();
    expect('#temperature').toContainText('19');
  });

  it('can reset the temperature', function(){
    thermostat.temperature = 10;
    $('#reset').click();
    expect('#temperature').toContainText('20');
  });

  it('can start with powersaving on', function(){
    expect($('#powersaving').prop('checked')).toBe(true)
  });

  it('can switch powersaving off', function(){
    $('#powersaving').click();
    expect($('#powersaving').prop('checked')).toBe(false);
    // expect(thermostat.powersaving).toBe(false);
  });

  it('can switch powersaving on', function(){
    $('#powersaving').click();
    $('#powersaving').click();
    expect($('#powersaving').prop('checked')).toBe(true)
  });

  it('can start as yellow', function(){
    expect($('#temperature').css('color')).toEqual('rgb(255, 255, 0)');
  });
  
  it('can switch to green', function(){
    $('#down').click();
    $('#down').click();
    $('#down').click();
    expect($('#temperature').css('color')).toEqual('rgb(0, 128, 0)');
  });

  it('can switch to red', function(){
    $('#powersaving').click();
    $('#up').click();
    $('#up').click();
    $('#up').click();
    $('#up').click();
    $('#up').click();
    $('#up').click();
    expect($('#temperature').css('color')).toEqual('rgb(255, 0, 0)')
  });

});