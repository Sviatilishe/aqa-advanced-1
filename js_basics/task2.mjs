import chalk from 'chalk';

const stringVariable = "Why do JavaScripters wear glasses? - Because they don't C#";
const numberVariable = 603700;
const booleanVariable = true;
const nullVariable = null;
let undefinedVariable;

console.log(chalk.magenta(stringVariable));
console.log(chalk.bgWhite(numberVariable));
console.log(chalk.blue(booleanVariable));
console.log(chalk.yellow(nullVariable));
console.log(chalk.italic(undefinedVariable));