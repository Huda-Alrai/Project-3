const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { users, roles } = require("./models");

//Post

//register
const register = async (user) => {
  const pendingUser = users.filter((element) => {
    return element.email === user.email
  })

  if (pendingUser.length === 0) {
    const newUser = user;

    newUser.password = await bcrypt.hash(user.password, Number(process.env.SALT))
    users.push(newUser)
    // return `new user created ${newUser} ` ???
    return newUser
  } else {
    return 'you have account already'
  }

};

//login
const login = async (user) => {
  const pendingUser = users.filter((element) => {
    return element.email === user.email
  })

  if (pendingUser.length === 0) {
    return 'please register first'
  } else {

    if (await bcrypt.compare(user.password, pendingUser[0].password)) {
      const savedPerm = roles.filter((p) => p.id === pendingUser[0].role_id)


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

//GET
const getUsers = () => {
  return users;
};

//Delete
//delete requset upon username
             //delete?userName=user1
const deleteUser = async (user) =>{
  const updatedUser = users.filter((u)=>{
    
    return user.query.userName !== u.userName

  })
  return updatedUser;
}


  
module.exports = {
  register,
  login,
  getUsers,
  deleteUser,
};
