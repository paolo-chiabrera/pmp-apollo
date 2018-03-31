import mongoose from 'mongoose';
import timestamps from 'mongoose-timestamp';

mongoose.Promise = Promise;

const { Schema } = mongoose;

const imageSchema = new Schema({
  filename: {
    type: String,
    require: true,
    index: true,
  },
  pageUrl: {
    type: String,
    require: true,
    index: {
      unique: true,
    },
  },
  sourceId: {
    type: String,
    require: true,
    index: true,
  },
  title: {
    type: String,
    require: false,
  },
  url: {
    type: String,
    require: true,
    index: {
      unique: true,
    },
  },
});

imageSchema.plugin(timestamps);

export const ImageModel = mongoose.model('ImageModel', imageSchema, 'images');

export const typeDefs = `
    type Image {
        _id: String
        filename: String!
        createdAt: String
        pageUrl: String
        sourceId: String
        title: String
        url: String!
    }

    type Query {
        images: [Image]
    }
`;
