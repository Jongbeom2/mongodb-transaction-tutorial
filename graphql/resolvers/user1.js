const User1 = require('../../models/user1');
const resolvers = {
  Query: {
    user1s: async (_, args) => {
      try {
        const user1s = await User1.find();
        return user1s;
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
  },
  User1: {
    _id(_, args) {
      return _._id;
    },
    name(_, args) {
      return _.name;
    },
    bookings(_,args){
      return _.bookings
    },
    createdAt(_, args) {
      return _.createdAt;
    },
  },
  Mutation: {
    createUser1: async (_, args) => {
      try {
        const user1 = new User1({
          ...args.user1Input
        })
        const result = await user1.save();
        return result;
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
  }
};

module.exports = resolvers; 