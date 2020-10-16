const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { users, roles } = require("./models");

const register = async (user) => {
  const pendingUser = users.filter((element) => {
    return element.email === user.email
  })
  if (pendingUser.length === 0) {
    const newUser = user;
    newUser.password = await bcrypt.hash(user.password, Number(process.env.SALT))
    users.push(newUser)
    return 'new user created '
  } else {
    return 'you have account already'
  }
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
