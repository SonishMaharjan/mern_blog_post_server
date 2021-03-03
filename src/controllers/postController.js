const postService = require("../services/postService");
const httpStatus = require("http-status-codes");

function getAllPosts(req, res, next) {
  postService
    .getAllPosts(req.userId)
    .then((data) => {
      res.json({ data });
    })
    .catch((err) => {
      next(err);
    });
}

function getPost(req, res, next) {
  postService
    .getPost(req.params.id)
    .then((data) => {
      res.json({ data });
    })
    .catch((err) => {
      next(err);
    });
}

function getUserPosts(req, res, next) {
  postService
    .getUserPosts(req.params.user_id)
    .then((data) => {
      res.json({ data });
    })
    .catch((err) => {
      next(err);
    });
}

function create(req, res, next) {
  let post = { ...req.body, user_id: req.userId };
  console.log(post);
  postService
    .createPost(post)
    .then((data) => {
      res.status(httpStatus.StatusCodes.CREATED).json({ data });
    })
    .catch((err) => {
      next(err);
    });
}

function update(req, res, next) {
  postService
    .updatePost(req.params.id, req.body)
    .then((data) => {
      res.json({ data });
    })
    .catch((err) => {
      next(err);
    });
}

function deletePost(req, res, next) {
  postService
    .deletePost(req.params.id)
    .then((data) => {
      res.json({ data });
    })
    .catch((err) => {
      next(err);
    });
}

module.exports = {
  getAllPosts,
  getPost,
  getUserPosts,
  create,
  update,
  deletePost,
};
