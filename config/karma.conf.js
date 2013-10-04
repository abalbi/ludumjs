module.exports = function (config) {
  config.set({
    basePath: '../',

    files: [
      'spec/*.js',
    ],

    frameworks: ['jasmine'],

    autoWatch: true,

    browsers: ['Chrome'],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }
  });
};
