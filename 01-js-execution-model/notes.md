<h1 align="center"><b>JavaScript Intro</b></h1>

- JavaScript is a programming language used to make webpages **interactive**.
- Without JavaScript webpages are static.
- Using JavaScript, buttons repsond, forms validate etc.

### Building Blocks of JavaScript

The following are the building blocks of JavaScript:

1. Variables
2. functions
3. scope
4. callstack
5.  `this` keyword
6.  hoisting

All these depend on **Execution Context** to work correctly.

## Execution Context

- In JavaScript **Execution context** is an absract environment where the JavaScript code is executed and evaluated.
- It is like a container that stores:
  - variables
  - functions
  - scope details

<h3>Why do we need Execution Context?</h3>

- It is like a container that defines what variables, functions and objects are accessible at any given point of time.
- It helps to track the current state of execution, handle function class and manage variable scope.
- Without which, it leads to confusion and code becomes unmanageable.


### How Execution Context works?

- It is creayed in two phases:

1. In creation phase:
  - JavaScript scans the code before running it.
  - During this phase:
    - variables are declared `undefined`.
    - Memory is allocated.
    - Functions are stored completely.

2. Execution Phase
  - JavaScript scans the code line by line.
  - Variables get real values.
  - Functions are executed.


## Types of Execution Context

There are three types of Execution Context:

1. global execution context
2. function execution context
3. eval execution context

### Global Execution Context(GEC)

- Created when JS starts.
- Only one global execution context starts.
- Sets window in browser.
- Stores functions and global variables.

### Function Execution Context(FEC)

- Created everytime a function is called.
- Each function call gets its own function context.

### Eval Execution Context(EEC)

- Created when eval is used.
- Avoided in real world projects.


Observe the following example:

```js
function one(){
  two():
}
function two(){
  console.log("hi");
}
one();
```

### Call Stack

1. Global context
2. one()
3. two()
4. two ends
5. one ends
6. global remains


## Call Stack 

- Call Stack is a data structure that keeps tract of function calls in JavaScript.
- Whenever JS sees a function call, the function call is pushed into the stack.
- After execution of the function, JS pops it out of  the stack.
- It manages execution contexts in JS. 
