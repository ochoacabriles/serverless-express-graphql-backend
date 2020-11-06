import templateQueries from './template/queries';
import templateMutations from './template/mutations';

const resolvers = {
  Query: {
    ...templateQueries
  },
  Mutation: {
    ...templateMutations
  }
};

export default resolvers;
