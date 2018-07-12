module.exports = ({ resolversPath, typesPath } = {}) => {
  const { join } = require("path");
  const { makeExecutableSchema } = require("graphql-tools");
  const { readFileSync } = require("fs");

  const relativePath = (...args) => join(process.cwd(), ...args);

  const resolvers = require(relativePath(resolversPath));
  const typeDefs = readFileSync(relativePath(typesPath), "utf8");

  return makeExecutableSchema({ resolvers, typeDefs });
};
