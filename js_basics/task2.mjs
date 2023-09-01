// Connecting the chalk library
import chalk from 'chalk';

// Declaration of variables of different primitive data types
const stringVariable = "Why do JavaScripters wear glasses? - Because they don't C#";
const numberVariable = 603700;
const booleanVariable = true;
const nullVariable = null;
let undefinedVariable;

// Output the values ​​of the variables to the console
console.log(chalk.magenta(stringVariable));
console.log(chalk.bgWhite(numberVariable));
console.log(chalk.blue(booleanVariable));
console.log(chalk.yellow(nullVariable));
console.log(chalk.italic(undefinedVariable));