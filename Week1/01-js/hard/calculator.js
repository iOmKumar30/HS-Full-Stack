/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
  }
  add(num) {
    if (typeof num === "number") {
      this.result += num;
    } else {
      throw new Error("Invalid number");
    }
  }
  subtract(num) {
    if (typeof num === "number") {
      this.result -= num;
    } else {
      throw new Error("Invalid number");
    }
  }
  multiply(num) {
    if (typeof num === "number") {
      this.result *= num;
    } else {
      throw new Error("Invalid number");
    }
  }
  divide(num) {
    if (typeof num === "number" && num !== 0) {
      this.result /= num;
    } else {
      throw new Error("Invalid number");
    }
  }
  clear() {
    this.result = 0;
  }
  getResult() {
    return this.result;
  }
  calculate(expression) {
    this.result = eval(expression.replace(/\s+/g, " "))
    /*
    The expression /\s+/g, " " is used within the replace method to modify a string by replacing all occurrences of whitespace characters with a single space. Here's a breakdown of what each part means:

Regular Expression: /\s+/g
/ and /: These are delimiters that indicate the start and end of the regular expression.
\s: This is a shorthand character class that matches any whitespace character. This includes spaces, tabs, and newline characters.
+: This is a quantifier that means "one or more". So, \s+ will match one or more consecutive whitespace characters.
g: This is the global flag. It means that the replacement should be applied to all matches in the string, not just the first one.
Replacement String: " "
The string " " (a single space) is what each match of the regular expression will be replaced with.
    */
    if(this.result === Infinity) {
      throw new Error("Infinity")
    }
    return this.result;
  }
}

module.exports = Calculator;
