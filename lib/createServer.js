module.exports = ({
  endpointURL = "/graphql",
  graphiqlURL = "/graphiql",
  schema
} = {}) => {
  const express = require("express");
  const compression = require("compression");
  const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");

  const app = express();
  app.use(compression());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(endpointURL, graphqlExpress({ schema }));
  app.use(graphiqlURL, graphiqlExpress({ endpointURL }));

  return app;
};
