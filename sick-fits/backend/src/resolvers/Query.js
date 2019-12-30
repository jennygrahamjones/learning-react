// methods defined in here must match those defined on the Query type in the schema
const { forwardTo } = require("prisma-binding");

const Query = {
  //   async items(parent, args, ctx, info) {
  //     const items = await ctx.db.query.items();
  //     return items;
  //   }
  items: forwardTo("db")
};

module.exports = Query;
