const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const httpStatus = require("http-status-codes");

const config = require("../config");

const auth = function (req, res, next) {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res
      .status(httpStatus.StatusCodes.UNAUTHORIZED)
      .send({ atuth: false, message: "Not authorization token" });
  }

  jwt.verify(token, config.secret, function (err, decoced) {
    if (err) {
      return res
        .status(httpStatus.StatusCodes.INTERNAL_SERVER_ERROR)
        .send({ auth: false, message: "Failed to authenticate token" });
    }

    let tokenUserId = decoded.id;
  });
};
