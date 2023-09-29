async function printWithDelay(text, ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(text);
    }, ms);
  });
}

printWithDelay("I've been waiting four seconds", 4000)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
