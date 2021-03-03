const { bookshelf } = require("../db");

const TABLE_NAME = "posts";

class Post extends bookshelf.Model {
  get tableName() {
    return TABLE_NAME;
  }

  get hasTimesStamp() {
    return true;
  }
}

module.exports = Post;
