module.exports = {
  moduleFileExtensions: ['js', 'vue'],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  collectCoverageFrom: [
    'src/components/**/*.{js,vue}',
    '!**/demo/**',
    '!**/styles/**',
    '!**/utils/**',
    '!**/mixins/**'
  ],
  collectCoverage: true,
  coverageReporters: ['html', 'lcov', 'text-summary'],
  coverageDirectory: './test/coverage'
}
