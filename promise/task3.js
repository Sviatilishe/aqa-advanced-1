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
  
  async function fetchData() {
    try {
      const todo = await fetchTodo();
      const user = await fetchUser();
      return { todo, user };
    } catch (error) {
      throw error;
    }
  }
  fetchData()
    .then(({ todo, user }) => {
      console.log('Result (todo):', todo);
      console.log('Result (user):', user);
    })
    .catch(error => {
      console.error('Error:', error.message);
    });
  