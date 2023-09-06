const number = 4;

console.log(`Таблиця множення для числа ${number} з використанням циклу for:`);
for (let i = 1; i <= 10; i++) {
  const result = number * i;
  console.log(`${number} * ${i} = ${result}`);
}

console.log(`Таблиця множення для числа ${number} з використанням циклу while:`);
let i = 1;
while (i <= 10) {
  const result = number * i;
  console.log(`${number} * ${i} = ${result}`);
  i++;
}
