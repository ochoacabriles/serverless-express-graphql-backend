import templateQueries from './template/queries';

const resolvers = {
  Query: {
    ...templateQueries
  },
  Mutation: {
    ...templateMutations
  }
};

export default resolvers;
