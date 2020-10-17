let users = [
  
  { 
    userName:"admin",
    email: "admin@gmail.com",
    password: "$2b$10$ytNobitJZNo0WeuyEqG85.erwKBKaBtunsR.u2GKKG1zynsuUvv6C",
    role_id: 1,
  },
  {
    userName:"user1",
    email: "user1234@gmail.com",
    password: "$2b$10$ytNobitJZNo0WeuyEqG85.erwKBKaBtunsR.u2GKKG1zynsuUvv6C",
    role_id: 2,
  },
  {
    userName:"user2",
    email: "user2@gmail.com",
    password: "$2b$10$ytNobitJZNo0WeuyEqG85.erwKBKaBtunsR.u2GKKG1zynsuUvv6C",
    role_id: 2,
  },
  {
    userName:"user3",
    email: "user3@gmail.com",
    password: "$2b$10$ytNobitJZNo0WeuyEqG85.erwKBKaBtunsR.u2GKKG1zynsuUvv6C",
    role_id: 2,
  },
  {
    userName:"user4",
    email: "user4@gmail.com",
    password: "$2b$10$ytNobitJZNo0WeuyEqG85.erwKBKaBtunsR.u2GKKG1zynsuUvv6C",
    role_id: 2,
  },
  {
    userName:"user5",
    email: "user5@gmail.com",
    password: "$2b$10$ytNobitJZNo0WeuyEqG85.erwKBKaBtunsR.u2GKKG1zynsuUvv6C",
    role_id: 2,
  },
];

const roles = [
  {
    id: 1,
    type: "admin",
    permissions: ["r", "w", "u", "d"],
  },
  {
    id: 2,
    type: "user",
    permissions: ["r", "w"],
  },
];

module.exports = {
  users,
  roles,
};
