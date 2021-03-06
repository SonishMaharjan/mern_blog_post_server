const httpStatus = require("http-status-codes");

const { Model } = require("bookshelf");

const userService = require("../services/userService");

function fetchAll(req, res, next) {
  userService
    .getAllUsers()
    .then((data) => {
      res.json({
        data,
      });
    })
    .catch((err) => {
      next(err);
    });
}

function fetchById(req, res, next) {
  userService
    .getUser(req.params.id)
    .then((data) => {
      res.json({
        data,
      });
    })
    .catch((err) => {
      next(err);
    });
}

function create(req, res, next) {
  userService
    .createUser(req.body)
    .then((data) => {
      res.status(httpStatus.StatusCodes.CREATED).json({
        data,
      });
    })
    .catch((err) => {
      next(err);
    });
}

function update(req, res, next) {
  userService
    .updateUser(req.params.id, req.body)
    .then((data) => {
      res.json({
        data,
      });
    })
    .catch((err) => {
      next(err);
    });
}

function deleteUser(req, res, next) {
  userService
    .deleteUser(req.params.id)
    .then((data) => {
      res.json({
        data,
      });
    })
    .catch((err) => {
      next(err);
    });
}

module.exports = {
  fetchAll,
  fetchById,
  create,
  update,
  deleteUser,
};
