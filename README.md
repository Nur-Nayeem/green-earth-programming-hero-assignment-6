# 1. What is the difference between var, let, and const?

## Ans:
In javascript var, let, and const are use to make variables. these are look the same, but works differently.

### Differences:
1. **var:** It is a Function-scoped, because it can be accessible from anywhere . It can be reassignable and redeclarable. It also hoisted and initialized with undefined.

2. **let:** It is a  Block-scoped, because it's only accessible within a curly braces { }, means if we declere a variable with let inside a function, it only accessable inside that function, not outside. It can be reassinable, but not redeclarable.  

3. **const:** This is also a Block-scoped like let. But  reassignable and redeclarable are not possible.

<br><br>

---

# 2. What is the difference between map(), forEach(), and filter()?

## Ans:
In javascript map(), forEach(), filter() are methods, these are used to iterate over arrays.There has some difference given bellow

### Differences:
1. **map():** This Method create a new array by calling a given function on each item in the original array. it transforms each item and store the result in a new array, while the original array remain unchanged. It can be easily chained with other array methods, because it returns a new array.

2. **forEach():** This method runs a given function once for every element in the array. Its basicaly used for performing actions like logging vallues, updatig items or working with DOM. It can't be chained with other array methods, because it does not return new array, it return undefined.

3. **filter():** This method also create a new array like map() method, but the new array contain only those items from the original array that passed the provided test of the callback function that returns true or false. It remove items that don't meet the condition while keeping the original array remain unchanged. It can be chained with other array methods.

<br><br>

---

# 3. What are arrow functions in ES6?

## Ans:
Arrow function in ES6 are shorter way to write function in javascript. arrow function use => simble instead of the function keyword. Arrow functions make the code cleaner and easier to read, and they don't have their own this keyword, which makes them useful while working with objects, callbacks, or array methods like map, filter, and forEach.

<br><br>

---

# 4. How does destructuring assignment work in ES6?

## Ans:
In javascript ES6 destructuring assignment lets us extract values from arrays or properties from objects and store them into variables. Instead of accessing items one by one, we can unpack them in a single line, this make the code shorter and cleaner.

### Example:

**Array destructuring:**
```js
const numbers = [2,64,6,3,2];
const [a,b,...number] = numbers;
console.log(a,b); // output: 2 64
```

**Object destructuring:**
```js
const user = { name: "Nayeem", age: 22 };
const { name, age } = user;
console.log(name, age); // output: Nayeem 22
```
<br><br>

---

# 5. Explain template literals in ES6. How are they different from string concatenation?

## Ans:
Template literals is intruduced by ES6 , This the modern way to write/create string. Instead of using quotes("" or '') it use backticks (``). It allow us to easily insert variables and expressions inside a string using ${}. It also suport multiline string without needing '\n' this make code cleaner and easier to read.


### Difference from string concatenation:

1. With normal string concatenation, basicaly we join strings and variables using + operator which look messy
2. With template literals, we directly place variables inside the string using ${}, which is simpler and more readable.

### Example
```js
const name = "Nayeem";
const age = 22;

// String concatenation
const str1 = "My name is " + name + " and I am " + age + " years old.";

// Template literal
const str2 = `My name is ${name} and I am ${age} years old.`;
```