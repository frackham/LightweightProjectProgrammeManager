//
if (window.console) console.log('Ext JS Application definition.');
$( document ).ready(function() {
  
  //Templates (not a true Ext template):
  var tplQunit = '<h2>qunit unit testing</h2><div id="qunit"></div>'
      	+  '<div id="qunit-fixture"></div>'
      	+  '<script>console.log("running tests...");'
      	+  'QUnit.start();</script>';
  //if (window.console) console.log("*: " + tplQunit);



  Ext.application({
    name: 'MyApp',
    launch: function(){
      if (window.console) console.log('Ext JS Application launch init function run.');    
         mainPanel.add({
    xtype: 'tabpanel',
    items: [
      {
      title: 'Details', 
      html: '<h2>Dashboard</h2><p>Paragraph of stuff here...</p>'
       }, {
      title: 'Edit Areas', 
      html: '<h2>Edit Dashboard Areas</h2><p>Paragraph of stuff here...</p><p>probably hide this until data layer exists.</p>'
       }, {
      title: 'Projects', 
      html: '<h2>projects</h2><p>should be further offset to right...</p><p>use firefly layout</p>'
       },{
      title: 'About', 
      html: '<h2>about</h2><p>link to github and explain open source.</p><p>use firefly layout</p>'
       },{
      title: 'Debug', 
      html: tplQunit
      }

     ]
   });

      
      
      mainContainer.add(mainPanel);
      mainContainer.suspendLayout = false;
      mainContainer.doLayout();
      
    }
  });

  


  var mainContainer = Ext.create
    ('Ext.container.Container', {
      renderTo: Ext.getBody(), 
      layout: 'column', 
      suspendLayout: true
    });

  var mainPanel = Ext.create
    ('Ext.panel.Panel', {
      title: 'EXT PANEL TITLE',
      xtype: 'panel',
      resizable: 'true',
      columnWidth: 1
    });
            

 
 
 
 }); //End of doc ready call.