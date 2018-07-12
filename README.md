# [nano-graphql-server](https://github.com/reaktivo/nano-graphql-server)

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/reaktivo/nano-graphql-server/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/@reaktivo/nano-graphql-server.svg?style=flat)](https://www.npmjs.com/package/@reaktivo/nano-graphql-server)
[![CircleCI Status](https://circleci.com/gh/reaktivo/nano-graphql-server.svg?style=shield)](https://circleci.com/gh/reaktivo/nano-graphql-server)
[![Coverage](https://img.shields.io/codecov/c/github/reaktivo/nano-graphql-server.svg)](https://codecov.io/gh/reaktivo/nano-graphql-server)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/reaktivo/nano-graphql-server/compare)

nano-graphql-server is a tiny convention-over-configuration graphql server

## Installation

```sh
npm install -g @reaktivo/nano-graphql-server
```

## Usage

```js
import { createGqlServer, createSchema } from "@reaktivo/nano-graphql-server";

createGqlServer({
  port,
  apiKey, // for use with APOLLO_ENGINE
  schema: createSchema({
    resolversPath, // relative path to a resolvers js file,
    typesPath // relative path to type definitions
  })
});
```

## License

nano-graphql-server is open source software [licensed as MIT](https://github.com/reaktivo/nano-graphql-server/blob/master/LICENSE).
