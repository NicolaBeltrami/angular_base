module.exports = function(config) {
  config.set({

    basePath: '../',

    files: ['www/bower_components/angular/angular.js', //
            'www/bower_components/angular-route/angular-route.js', //
            'www/bower_components/angular-resource/angular-resource.js', //
            'www/bower_components/angular-animate/angular-animate.js', //
            'www/bower_components/angular-mocks/angular-mocks.js', //
            'www/bower_components/moment/moment.js', //
            'www/bower_components/moment-timezone/builds/moment-timezone-with-data.js', //
            'test/unit/bind.polyfill.js', //
            'www/js/**/*.js',

	        // tests
	        'test/unit/**/*.js',
	
	        // templates
	        'www/directives/**/*.html'],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['PhantomJS'],

    plugins: ['karma-chrome-launcher', //
    'karma-firefox-launcher', //
    'karma-jasmine', //
    'karma-phantomjs-launcher',//
    'karma-ng-html2js-preprocessor'//
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },

    preprocessors: {
      "www/directives/**/*.html": ["ng-html2js"]
    },

    ngHtml2JsPreprocessor: {
      moduleName: 'directives-templates',
      stripPrefix: 'www/'
    }

  });
};
