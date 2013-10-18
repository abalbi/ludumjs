module.exports = function (config) {
  config.set({
    basePath: '../',

    files: [
      'public/test/e2e/**/*.js',
      'public/test/e2e/*.js'
    ],

    frameworks: ['ng-scenario'],

    autoWatch: false,

    browsers: ['Chrome'],

    singleRun: true,

    proxies: {
      '/': 'http://localhost:3000/'
    },

    junitReporter: {
      outputFile: 'test_out/e2e.xml',
      suite: 'e2e'
    }
  });
};
