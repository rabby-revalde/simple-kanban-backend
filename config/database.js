const parse = require("pg-connection-string").parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: config.host,
        port: config.port,
        database: config.database,
        username: config.user,
        password: config.password,
        charset: "utf8",
        ssl: { rejectUnauthorized: false },
      },
      options: {},
    },
  },
});

// module.exports = ({ env }) => ({
//   defaultConnection: "default",
//   connections: {
//     default: {
//       connector: "bookshelf",
//       settings: {
//         client: "sqlite",
//         filename: env("DATABASE_FILENAME", ".tmp/data.db"),
//       },
//       options: {
//         useNullAsDefault: true,
//       },
//     },
//   },
// });
