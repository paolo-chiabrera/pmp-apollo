import convict from 'convict';

const conf = convict({
    apollo: {
        apiKey: {
            doc: 'The applicaton environment.',
            default: '',
            env: 'NODE_APOLLO_APIKEY',
        }
    },
    env: {
        doc: 'The applicaton environment.',
        format: ['production', 'development', 'test'],
        default: 'development',
        env: 'NODE_ENV',
    },
    mongo: {
        uri: {
            doc: 'The mongo uri.',
            default: 'mongodb://localhost:27017/pmp',
            env: 'NODE_MONGO_URI',
        },
    },
    port: {
        doc: 'The port to bind.',
        format: 'port',
        default: 3000,
        env: 'PORT',
    }
});

conf.validate({ allowed: 'strict' });

export default conf;
