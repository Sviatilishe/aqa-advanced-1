const originalArray = [1, 2, 3, 4, 5];

const multipliedArray = originalArray.map((value, index) => {
  return value * index;
});

console.log(multipliedArray);