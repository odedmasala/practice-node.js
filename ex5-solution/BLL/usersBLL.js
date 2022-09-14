const usersWS = require('../DAL/usersWS');
const todosWS = require('../DAL/todosWS');
const usersFile = require('../DAL/usersFile');

const getUserDataByUsername = async (username) => {
  const userData = {};

  // user's name & email
  const { data: users } = await usersWS.getUsersByUsername(username);
  const user = users[0];
  userData.name = user.name;
  userData.email = user.email;

  // user's titles of his first 10 todos
  const { data: todos } = await todosWS.getUserTodos(user.id);
  const titles = todos.slice(0, 10).map((todo) => todo.title);
  userData.titles = titles;

  // user's phones
  const data = await usersFile.getAllUsers();
  const { phones } = data.users.find((user) => user.username === username);
  userData.phones = phones;

  return userData;
};

module.exports = { getUserDataByUsername };
