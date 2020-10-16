const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { users, roles } = require("./models");

const register = async (user) => {

};

const login = async (user) => {

};

const getUsers = () => {
  return users;
};

module.exports = {
  register,
  login,
  getUsers,
};
