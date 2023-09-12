const checkIfAdult = (age) => age >= 18;

  
  const age1 = 25;
  const age2 = 15;
  
  const isAdult1 = checkIfAdult(age1);
  const isAdult2 = checkIfAdult(age2);
  
  console.log(`Is ${age1} year old person an adult? Answer: ${isAdult1}`);
  console.log(`Is ${age2} year old person an adult? Answer: ${isAdult2}`);
  