module.exports = ({
  apiKey,
  port,
  endpointURL,
  expressApp,
  startupTimeout = 3000
} = {}) => {
  const { ApolloEngine } = require("apollo-engine");
  const engine = new ApolloEngine({ apiKey });

  return {
    listen(port, callback) {
      const config = {
        port,
        graphqlPaths: [endpointURL],
        expressApp,
        launcherOptions: {
          startupTimeout
        }
      };
      engine.listen(config, callback);
    }
  };
};
