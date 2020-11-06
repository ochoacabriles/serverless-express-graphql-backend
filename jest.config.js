/*
  File to config jest.

  Should be updated according to the DB engine used.
*/

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['**/graphql/resolvers/**'],
  coverageReporters: ['text'],
  modulePathIgnorePatterns: ['.__mocks__.*']
};
