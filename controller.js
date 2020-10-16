const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { users, roles } = require("./models");

const register = async (user) => {
  const pendingUser = users.filter((element) => {
    return element.email === user.email
  })
  console.log(999, process.env.SALT)
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
  const pendingUser = users.filter((element) => {
    return element.email === user.email
  })

  if (pendingUser.length === 0) {
    return 'please register first'
  } else {

    if (await bcrypt.compare(user.password, pendingUser[0].password)) {
      const savedPerm = roles.filter((p) => p.id === pendingUser[0].role_id)
      console.log('hiii', savedPerm)
      const payload = {
        email: pendingUser[0].email,
        permissions: savedPerm[0].permissions

      }
      const options = {
        expiresIn: process.env.TOKEN_EXPIRATION
      }
      return jwt.sign(payload, process.env.SECRET, options)


    } else {
      return 'username or password in incorrect'
    }

  }
};

const getUsers = () => {
  return users;
};

module.exports = {
  register,
  login,
  getUsers,
};
