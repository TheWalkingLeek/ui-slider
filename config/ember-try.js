/*jshint node:true*/
module.exports = {
  scenarios: [
    {
      name: 'ember-release',
      npm: {
        dependencies: {
          'ember-source': null
        }
      }
    }
    {
      name: 'ember-beta',
      npm: {
        dependencies: {
          'ember-source': null
        }
      }
    },
    {
      name: 'ember-canary',
      npm: {
        devDependencies: {
          'ember-source': null
        }
      }
    },
    {
      name: 'ember-default',
      npm: {
        devDependencies: {}
      }
    }
  ]
};
