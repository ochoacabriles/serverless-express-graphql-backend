import { ApolloServer } from 'apollo-server-express';
import resolvers from './resolvers';
import typeDefs from './typedefs';
import schemaDirectives from './directives';
// import jwt from 'jsonwebtoken';

const playgroundSettings = {
  settings: {
    'editor.theme': 'dark',
    'request.credentials': 'same-origin'
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  schemaDirectives,
  context: ({ req, res }) => {
    res.set('Access-Control-Allow-Credentials', true);
    res.set('Access-Control-Allow-Origin', req.headers.origin);

    // If user is logged, the token will be in authorization header
    let token;

    const { authorization: authorizationHeader } = req.headers;
    if (authorizationHeader) {
      const headerArray = authorizationHeader.split(' ');
      if (headerArray[0] === 'Bearer') {
        token = headerArray[1];
      }
    }

    // If there is a token, verify it an get userId 
    // or any other information stored in the token
    let userId;
    if (token) {
      // Remove this line to read the token
      userId = 'userId';
      // const secret = res.app.get('jwtSecret');
      // ({ id: userId } = jwt.verify(token, secret));
    }

    return { req, res, userId };
  },
  playground: playgroundSettings,
  introspection: true
});

export default server;
