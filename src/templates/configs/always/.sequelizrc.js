const path = require("path");

module.exports = {
  config: path.resolve("./_config", "db.js"),
  "models-path": path.resolve("src", "db", "models"),
  "seeders-path": path.resolve("src", "db", "seeders"),
  "migrations-path": path.resolve("src", "db", "migrations"),
};
