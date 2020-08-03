module.exports = {
  name: 'ts-error-app',
  preset: '../../jest.config.js',
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  coverageDirectory: '../../coverage/apps/ts-error-app',
};
