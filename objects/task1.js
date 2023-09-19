const student = {};

student.firstName = "Dave";
student.lastName ="Davidson";
student.age = 24;
student.courses =  ["Literature", "History", "Art"];

function printUserInfo(student) {
    console.log("Name: " + student.firstName);
    console.log("Surname: " + student.lastName);
    console.log("Age: " + student.age);
    console.log("Courses: " + student.courses);
  }
  
  printUserInfo(student);