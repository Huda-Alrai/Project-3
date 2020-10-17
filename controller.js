const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
let { users, roles } = require("./models");

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
// const deleteUser = async (user) => {
//   const isUserExist = users.filter((u) => {
//     return user.query.userName === u.userName
//   })
//   if (isUserExist.length === 0) {
//     return 'sorry no user found to be deleted'
//   }
//   else {
//     console.log(user.query.password)
//     const updatedUser = users.filter((u) => {

//       return user.query.userName !== u.userName

//     })
//     return updatedUser;
//   }


// }

//modified delete
const deleteUser = async (user) => {
  const usersLength = users.length
  users = users.filter((u) => {
    return user !== u.userName
  })
    if (users.length === usersLength) {
      return 'no user found to be deleted'
  } else {
      return users;
  }
}

//update
//update depend on username - update whatever you put in body 
//if you pass email it will updated otherwise it will be as it is 
const updateUser = async (user) =>{
  const selected = users.filter((u)=>{
    return user.query.userName === u.userName
  
  })
  
  selected[0].userName = user.body.userName || selected[0].userName
  selected[0].email = user.body.email || selected[0].email
  selected[0].password = await bcrypt.hash(user.body.password, Number(process.env.SALT)) || selected[0].password

  return users

}

module.exports = {
  register,
  login,
  getUsers,
  deleteUser,
  updateUser,
};
