// Function Exercise 1: Simple function
function myFunction() {
  return "Hello World";
}
console.log(myFunction());

// Function Exercise 2: Quadrupler
function quadrupler(x) {
  return 4 * x;
}
console.log(quadrupler(3));

// Function Exercise 3: Welcome Message
function welcome(firstName, lastName) {
  return `Hello ${firstName.toLowerCase()} ${lastName.toUpperCase()}. How can I help you?`;
}
console.log(welcome("Michael", "Scofield"));

// Function Exercise 4:
function temperatureConverter(Fahrenheit) {
  Celsius = (Fahrenheit - 32) * (5 / 9);
  return Celsius;
}
console.log(temperatureConverter(1));

// Function Exercise 5: Dog Years
let age = 10;
function dogYears(age) {
  if (age === 1) {
    dogAge = 15;
  } else if (age === 2) {
    dogAge = 24;
  } else if (age > 2) {
    dogAge = (age - 2) * 5 + 24;
  } else {
    dogAge = "less than 15";
  }
  return dogAge;
}
console.log(`You are ${age} years old, that is ${dogYears(age)} year(s) in dog years.`);

// Function Exercise 6: Calculator
let num1 = 3;
let num2 = 22;
let str = "*";
function calculator(num1, str, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    return "ERROR -> Num1/Num2 not a valid number.";
  } else {
    if (!["+", "-", "*", "/"].includes(str)) {
      return "ERROR -> Not a valid argument.";
    } else {
      result = eval(num1 + str + num2);
      return `The result of ${num1} ${str} ${num2} = ${result}.`;
    }
  }
}
console.log(calculator(num1, str, num2));

// Function Exercise 7: Less than
aMin = 5;
bMin = 4;
function min(a, b) {
  if (a <= b) {
    return a;
  } else return b;
}
console.log("The smaller argument is " + min(aMin, bMin) + ".");

// Function Exercise 8: To the power of
let xPow = 5;
let nPow = 3;
function pow(x, n) {
  return x ** n;
}
console.log(xPow + " to the power of " + nPow + " is " + pow(xPow, nPow));
