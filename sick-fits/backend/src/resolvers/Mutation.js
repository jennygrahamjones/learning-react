// methods defined in here must match those defined on the Mutation type in the schema
const Mutations = {
  async createItem(parent, args, ctx, info) {
    // check if they are logged in...
    const item = await ctx.db.mutation.createItem({ data: { ...args } }, info);
    // alternatively, this could be non-async and returned as a Promise
    return item;
  }
};

module.exports = Mutations;
