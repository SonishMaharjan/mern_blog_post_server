const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const httpStatus = require("http-status-codes");

const config = require("../config");

function login(credentials) {
  let { email, password } = credentials;
  if (!email || !password) {
    let errMsg = {
      code: httpStatus.StatusCodes.UNPROCESSABLE_ENTITY,
      message: "Email or password not provided",
    };
    throw errMsg;
  }
  return new userModel({ email: credentials.email })
    .fetch()
    .then((user) => {
      let isPasswordValid = bcrypt.compareSync(
        credentials.password,
        user.get("password")
      );
      if (!isPasswordValid) {
        let errMsg = {
          code: httpStatus.StatusCodes.UNAUTHORIZED,
          message: "Incorrect password",
        };
        throw errMsg;
      }

      let token = jwt.sign(
        { id: user.get("id"), email: user.get("email") },
        config.secret
      );
      return { authData: { token }, userData: user };
    })
    .catch((err) => {
      let errMsg = {
        code: httpStatus.StatusCodes.NOT_FOUND,
        message: "Can not login",
        detail: err.detail || err.message,
      };

      throw errMsg;
    });
}

module.exports = {
  login,
};
