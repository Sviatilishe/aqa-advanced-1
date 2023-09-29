function fetchTodo() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1").then(
    (result) => {
      if (!result.ok) {
        throw new Error("Internal Server Error (todos)");
      }
      return result.json();
    },
  );
}

function fetchUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1").then(
    (result) => {
      if (!result.ok) {
        throw new Error("Internal Server Error (users)");
      }
      return result.json();
    },
  );
}

Promise.all([fetchTodo(), fetchUser()])
  .then(([todo, user]) => {
    console.log("Todo:", todo);
    console.log("User:", user);
  })
  .catch((error) => {
    console.error(error);
  });

Promise.race([fetchTodo(), fetchUser()])
  .then((result) => {
    console.log("First completed response", result);
  })
  .catch((error) => {
    console.error(error);
  });
