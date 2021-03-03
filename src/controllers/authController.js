const { Router } = require("express");

const authService = require("../services/authService");

function login(req, res, next) {
  authService
    .login(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
}

module.exports = {
  login,
};
