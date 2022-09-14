const { default: axios } = require("axios");
const jsonfile = require("jsonfile");
// const jsonfile = require("../todo.json");

let getUser = async (username) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/users`
  );
  const userData = data.find((user) => user.username == username);
  console.log(userData.name);
  if (userData.name.startsWith("E")) {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/?userId=${userData.id}`
    );
    const file = `../todo.json`;

    jsonfile.readFile(file, (err, obj) => {
      if (err) console.error(err);
      const objex = {
        id: userData.id,
        name: userData.name,
        listtodo: data.map((todo) => todo.title),
      };
      const check = obj.userTODO.findIndex(
        (userTodo) => userTodo.id == objex.id
      );
      console.log(check);
      if (check == -1) obj.userTODO.push(objex);
      console.log(obj);
      jsonfile.writeFile(file, obj, (err) => {
        if (err) console.error(err);
        console.log("success");
      });
    });
  }
};
getUser("Antonette");
