const person = {
  firstName: 'Dave',
  lastName: 'Davidson',
  age: 24,
};

person.email = 'dd@dispostable.com';

delete person.age;

console.log(person);
