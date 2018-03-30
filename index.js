import { ApolloEngine } from 'apollo-engine';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import express from 'express';
import { makeExecutableSchema } from 'graphql-tools';
import mongoose from 'mongoose';

import config from './config';
import { ImageModel, typeDefs } from './models';
import resolvers from './resolvers';

mongoose.connect(config.get('mongo.uri'));

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

const app = express();

const engine = new ApolloEngine({
    apiKey: config.get('apollo.apiKey'),
});

app.use('/graphql', bodyParser.json(), graphqlExpress({
    cacheControl: true,
    context: { ImageModel },
    schema,
    tracing: true,
}));

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

engine.listen({
    port: config.get('port'),
    expressApp: app,
});
