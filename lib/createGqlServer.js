module.exports = ({
  apiKey = "",
  endpointURL = "/graphql",
  graphiqlURL = "/graphiql",
  port = 2000,
  schema
} = {}) => {
  const createServer = require("./createServer");
  const createEngine = require("./createEngine");

  return new Promise(resolve => {
    const expressApp = createServer({
      endpointURL,
      graphiqlURL,
      schema
    });

    if (apiKey) {
      const engine = createEngine({ apiKey, expressApp });
      engine.listen(port, resolve);
    } else {
      expressApp.listen(port, resolve);
    }
  });
};
