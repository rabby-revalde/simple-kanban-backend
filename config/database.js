const parse = require("pg-connection-string").parse;
const config = parse(process.env.DATABASE_URL);

// Issues:
// https://github.com/strapi/strapi/issues/5696
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
