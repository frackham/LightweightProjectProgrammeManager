//
if (window.console) console.log('Ext JS Application definition.');
$( document ).ready(function() {
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
      title: 'Tab 2', 
      html: '<h2>Edit Dashboard Areas</h2><p>Paragraph of stuff here...</p><p>probably hide this until data layer exists.</p>'
       }, {
      title: 'tab 3', 
      html: '<h2>projects</h2><p>should be further offset to right...</p><p>use firefly layout</p>'
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