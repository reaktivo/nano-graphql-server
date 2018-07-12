require("dotenv").config();
const createGqlServer = require("./createGqlServer");
const createSchema = require("./createSchema");

module.exports = createGqlServer({
  apiKey: process.env.APOLLO_ENGINE_API_KEY,
  port: process.env.PORT,
  schema: createSchema({
    resolversPath: "./resolvers",
    typesPath: "./types.gql"
  })
});
