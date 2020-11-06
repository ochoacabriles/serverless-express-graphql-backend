import express from 'express';
import cors from 'cors';
import graphiql from 'graphql-playground-middleware-express';
import cookieParser from 'cookie-parser';
import awsServerlessExpress from 'aws-serverless-express';

// Graphql server
import server from './graphql';
import getSecrets from './utils/secrets';
import connectToDatabase from "./db/connectionHandler";

const app = express();

// Middlewares
app.use(cookieParser());

const stage = process.env.STAGE;

app.use(cors());

server.applyMiddleware({ 
  app
});

// Configure graphql server
const endpoint = stage === 'prod' ? '/graphql' : `/${stage}/graphql`;
app.get('/playground', graphiql({ endpoint }));

const expressServer = awsServerlessExpress.createServer(app);

const handler = (event, ctx) => {
  ctx.callbackWaitsForEmptyEventLoop = true;
  // Configure secrets in the express app before returning the proxy
  // only for the first time
  if (!app.get('dbUri') || !app.get('dbUri')) {
    getSecrets(app)
      .then(() => {
        const dbUri = stage === 'local' ? process.env.LOCAL_DB_URI : app.get('dbUri');
        return connectToDatabase(dbUri);
      })
      .then(() => awsServerlessExpress.proxy(expressServer, event, ctx))
      .catch((err) => { throw new Error(err) });
  } else {
    return awsServerlessExpress.proxy(expressServer, event, ctx);
  }
};

export { handler };
