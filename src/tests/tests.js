//alert('demo - message from test.js');

/* Config
  
  We don't autostart tests, as this is triggered by displaying the Debug panel.

*/
QUnit.config.autostart = false;
QUnit.begin(function(){
if (window.console) console.log('Beginning QUnit Tests.'); //Callback fired when QUnit begins. Useful for tracing whether QUnit is working...
});

QUnit.done(function(){
if (window.console) console.log('Finished QUnit Tests.'); //Callback fired when QUnit ends. Useful for tracing whether QUnit is working...
});
//END CONFIG.


//Tests
QUnit.test( "hello test", function( assert ) {

  assert.ok( 1 == "1", "Passed!" );

});


QUnit.test( "hello test2", function( assert ) {

  assert.ok( 1 == "2", "Passed!" );

});


QUnit.test( "hello test3", function( assert ) {

  assert.ok( 1 == "1", "Passed!" );

});



QUnit.start();