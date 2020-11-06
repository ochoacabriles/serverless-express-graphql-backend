// It's required to fill seeders to be able to run tests

/*
  Test file for one resolver.
  Should include tests for any resolvers with related to a specific collection,
  specially if they are complicated queries.

  If a resolver has queries related to two or more collections,
  its test should be related to the main collection involved.

  The name of the file should be collectionName-tests.js

  If there are new queries or mutations in an existent resolver,
  the tests should be added to its already defined test file
  to avoid redundancy.
*/

// Import resolvers to test
import templateQueries from '../../../graphql/resolvers/template/queries';
import templateMutations from '../../../graphql/resolvers/template/mutations';

// Import relevant models

// Import relevant seeders

describe('Testing template resolvers', () => {
  // Actions to take before all tests
  // No need to change it

  /*
  beforeAll(async () => {
    Connect to in-memory DB or initialize mock data
  });

  // Actions to take before each test
  beforeEach(async () => {
    Insert relevant seeders in DB
  });

  // Actions to take after each test
  afterEach(async () => {
    Clear DB
  });

  // Actions to take after all tests
  // No need to change it
  afterAll(async () => {
    Kill DB connection if needed
  });
  */

  it('Testing helloWorld query', () => {
    const helloWorld = templateQueries.helloWorld();
    expect(helloWorld).toEqual('Hello world')
  });

  it('Testing helloWorld mutation', () => {
    const helloWorld = templateMutations.helloWorld();
    expect(helloWorld).toEqual('Hello world mutation');
  });
});
