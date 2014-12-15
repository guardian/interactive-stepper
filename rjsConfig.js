require.config({
        baseUrl: './src/js/app/',
        inlineText: true,
        name: '../../../bower_components/almond/almond',
        preserveLicenseComments: false,
        include: [
                'main'
        ],
        wrap: {
                start: 'define([\"require\"],function(require){var req=(function(){',
                end: 'return require; }()); return req; });'
        },
        paths: {
                almond: '../../../bower_components/almond/almond',
                backbone: '../../../bower_components/backbone/backbone',
                'backbone-nested-model': '../../../bower_components/backbone-nested-model/backbone-nested',
                'backbone.crossdomain': '../../../bower_components/backbone.crossdomain/Backbone.CrossDomain',
                d3: '../../../bower_components/d3/d3',
                jquery: '../../../bower_components/jquery/dist/jquery',
                mustache: '../../../bower_components/mustache/mustache',
                json: '../../../bower_components/requirejs-json/json',
                text: '../../../bower_components/requirejs-text/text',
                underscore: '../../../bower_components/underscore/underscore'
        }
});

