const resolvers = {
    Query: {
        images: async (parent, args, { ImageModel }) => await ImageModel.find().lean()
    },
};

export default resolvers;
