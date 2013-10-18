module.exports = function (config) {
  config.set({
    basePath: '../',

    files: [
      'public/lib/angular/angular.js',
      'public/lib/angular/angular-mocks.js',
      'public/src/*.js',
      'public/test/unit/*.js',
      'public/src/controllers.js',

    ],

    frameworks: ['jasmine','ng-scenario'],

    autoWatch: true,

    browsers: ['Chrome'],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }
  });
};
