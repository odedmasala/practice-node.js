const usersWS = require('../DAL/usersWS');

const getUsers = async () => {
  let { data: users } = await usersWS.getUsers();
  users = users.map((user) => {
    return {
      id: user.id,
      username: user.username,
      city: user.address.city,
    };
  });
  return users;
};

module.exports = { getUsers };
