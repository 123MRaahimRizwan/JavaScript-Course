const fetch_API = async (todo) => {
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  };
  let promise = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    options
  );
  let response = await promise.json();
  return response;
};

const getTodo = async (id) => {
  let response = fetch("https://jsonplaceholder.typicode.com/posts/" + id);
  let r = await response.json();
  return r;
};

const mainFunc = async () => {
  let todo = {
    title: "foo",
    body: "bar",
    userId: 1,
  };
  let todo_response = await fetch_API(todo);
  console.log(todo_response);
  console.log(await getTodo(567));
};

mainFunc();
