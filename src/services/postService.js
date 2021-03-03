const httpStatus = require("http-status-codes");
const postModel = require("../models/postModel");

function getAllPosts() {
  return postModel
    .where({ deleted_at: null })
    .fetchAll()
    .then((posts) => {
      return posts;
    })
    .catch((err) => {
      let errMsg = {
        code: httpStatus.StatusCodes.INTERNAL_SERVER_ERROR,
        message: httpStatus.getStatusText(
          httpStatus.StatusCodes.INTERNAL_SERVER_ERROR
        ),
      };
      throw errMsg;
    });
}

function getPost(id) {
  return new postModel({ id })
    .fetch()
    .then((post) => {
      return post;
    })
    .catch((err) => {
      let errMsg = {
        code: httpStatus.StatusCodes.NOT_FOUND,
        message: "post not found",
        detail: err.detail || err.message,
      };

      throw errMsg;
    });
}

function getUserPosts(userId) {
  console.log(userId);
  return postModel
    .where({ deleted_at: null, user_id: userId })
    .fetchAll((posts) => {
      return posts;
    })
    .catch((err) => {
      let errMsg = {
        code: httpStatus.StatusCodes.INTERNAL_SERVER_ERROR,
        message: httpStatus.getStatusText(
          httpStatus.StatusCodes.INTERNAL_SERVER_ERROR
        ),
      };
      throw errMsg;
    });
}

function createPost(post) {
  return new postModel(post)
    .save()
    .then((post) => {
      return post;
    })
    .catch((err) => {
      let errMsg = {
        code: httpStatus.StatusCodes.UNPROCESSABLE_ENTITY,
        message: "Cannot create new post",
        detail: err.detail || err.message,
      };

      throw errMsg;
    });
}

function updatePost(id, post) {
  return new postModel({ id })
    .save(post)
    .then((post) => {
      return post;
    })
    .catch((err) => {
      let errMsg = {
        code: httpStatus.StatusCodes.UNPROCESSABLE_ENTITY,
        message: "Cannot update post",
        detail: err.detail || err.message,
      };

      throw errMsg;
    });
}

function deletePost(id) {
  return new postModel({ id })
    .save({ deleted_at: new Date() })
    .then((post) => {
      return post;
    })
    .catch((err) => {
      let errMsg = {
        code: httpStatus.StatusCodes.BAD_REQUEST,
        message: "Cannot delete post",
        detail: err.detail || err.message,
      };
    });
}

module.exports = {
  getAllPosts,
  getPost,
  getUserPosts,
  createPost,
  updatePost,
  deletePost,
};
