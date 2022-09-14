const axios = require('axios');

const todosUrl = 'https://jsonplaceholder.typicode.com/todos';

const getUserTodos = (userId) => axios.get(`${todosUrl}?userId=${userId}`);

module.exports = { getUserTodos };
