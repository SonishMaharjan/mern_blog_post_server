const { bookshelf } = require("../db");

const TABLE_NAME = "users";

class User extends bookshelf.Model {
  get tableName() {
    return TABLE_NAME;
  }
}

module.exports = User;
