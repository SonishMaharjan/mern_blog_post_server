const bcrypt = require("bcryptjs");
const httpStatus = require("http-status-codes");
const jwt = require("jsonwebtoken");

const userModel = require("../models/userModel");
const config = require("../config");

function getAllUsers() {
  return userModel
    .where({
      deleted_at: null,
    })
    .fetchAll()
    .then((data) => {
      return data;
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

function getUser(id) {
  return new userModel({
    id,
  })
    .fetch()
    .then((user) => {
      return user;
    })
    .catch((err) => {
      let errMsg = {
        code: httpStatus.StatusCodes.NOT_FOUND,
        message: "User not found",
        detail: err.detail || err.message,
      };

      throw errMsg;
    });
}

function createUser(user) {
  let hashedPassword = bcrypt.hashSync(user.password);
  user.password = hashedPassword;

  return new userModel(user)
    .save()
    .then((data) => {
      let token = jwt.sign(
        { id: data.id, email: data.get("email") },
        config.secret
      );
      let authData = { token: token };
      return { userData: data, authData };
    })
    .catch((err) => {
      let errMsg = {
        code: httpStatus.StatusCodes.UNPROCESSABLE_ENTITY,
        message: "Cannot create new user",
        detail: err.detail || err.message,
      };

      throw errMsg;
    });
}

function updateUser(id, user) {
  return new userModel({
    id,
  })
    .save(user)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      let errMsg = {
        code: httpStatus.StatusCodes.UNPROCESSABLE_ENTITY,
        message: "Cannot update user",
        detail: err.detail || err.message,
      };

      throw errMsg;
    });
}

function deleteUser(id) {
  return new userModel({
    id,
  })
    .save({
      deleted_at: new Date(),
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      let errMsg = {
        code: httpStatus.StatusCodes.BAD_REQUEST,
        message: "Cannot delete user",
        detail: err.detail || err.message,
      };
    });
}

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
