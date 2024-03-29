define([
    'backbone',
    'collections/sheetCollection',
    'views/appView',
    'json!data/sampleData.json'
], function(
    Backbone,
    SheetCollection,
    AppView,
    SampleData
) {
   'use strict';

    var appView;
    
    // Your proxied Google spreadsheet goes here
    var key = '1hy65wVx-pjwjSt2ZK7y4pRDlX9wMXFQbwKN0v3XgtXM';

    function init(el, context, config, mediator) {
        // DEBUG: What we get given on boot
        console.log(el, context, config, mediator);

        // Load local JSON data
        console.log(SampleData);

        // Create collection from Google spreadsheet key and sheetname
        // from live external data
        var videogameCollection = new SheetCollection({
            key: key,
            sheetname: 'videogames'
        });
       
        // Create an app view, passing along the collection made above
        appView = new AppView({
            el: el,
            collection: videogameCollection
        });
        
        // Fetch data
        videogameCollection.fetch();

        // Start listening to URL #paths
        Backbone.history.start();
    }
    
    return {
        init: init
    };
});
