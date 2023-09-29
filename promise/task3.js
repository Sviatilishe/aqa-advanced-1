async function fetchTodo() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    if (!response.ok) {
      throw new Error('Internal Server Error (todos)');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function fetchUser() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');

    if (!response.ok) {
      throw new Error('Internal Server Error (users)');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function fetchData() {
  try {
    const todo = await fetchTodo();
    const user = await fetchUser();

    console.log('Todo:', todo);
    console.log('User:', user);
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
}

fetchData();
