# Variables in JavaScript

- Variables in JavaScript are **data containers**.
- Variables in JavaScript are declared using 3 keywords, they are **var**, **let** and **const**.
- JavaScript is a dynamically-typed language, i.e., it decides the type of the variable while running(run-time).
- JavaScript decides variable types at runtime and allows variables to change their type anytime.
- Unlike Java which is a static typed language, where variables once declared in a datatype, the datatype cannot be changed.

```javascript
let x=10;
x="Hello" // x becomes a string
x=true // x becomes boolean
```

## SCOPE

- Scope is the region where a variable is accessible.
- There are 3 types of scope in JavaScript:
  1. Global scope
  2. Function scope
  3. Block scope
 
### 1. Global Scope

- A varible is in global scope if it can be accessed from anywhere in the program(inside or outside the function or even outise the block).

```javascript
let name = "Stacklearner";
function greet(){
  console.log(name);
}
greet();
```

### 2. Function Scope

- A variable declared inside a function is only accessible from inside the funtion or inside the inner functions.

```javascript
function ntg(){
  if(true){
  var x=5;
}
console.log(x);
}
```

- Variables declared using the **var** keyword are **function-scoped**.

```html
<!DOCTYPE html>
<html>
<head>
  <title>var Function Scope Example</title>
</head>
<body>

<script>
  function foo() {
    if (true) {
      var x = 5; // var is function-scoped
    }
    console.log(x); // 5 — accessible anywhere inside the function
  }

  foo();
</script>

</body>
</html>
```

### 3.Block Scope

- A block is anything between { ... } — like if, for, while, or just { }. Variables declared with let and const are block-scoped, meaning they only exist inside that { }.

```js
{
  let a = 1;
  const b = 2;
}
console.log(a); // Error: a is not defined
console.log(b); // Error: b is not defined
```

- Variables declared using **let**,**const** are block scoped.
- using let:

```html
<!DOCTYPE html>
<html>
<head>
  <title>let Block Scope Example</title>
</head>
<body>

<script>
  function testLet() {
    if (true) {
      let y = 10; // let is block-scoped
    }
    console.log("let y =", y); 
  }

  testLet();
</script>

</body>
</html>

```

- using const:

```html
<!DOCTYPE html>
<html>
<head>
  <title>const Block Scope Example</title>
</head>
<body>

<script>
  function testConst() {
    if (true) {
      const z = 20; // const is block-scoped
    }
    console.log("const z =", z); 
  }

  testConst();
</script>

</body>
</html>

```

| Keyword   | Scope Type     | Meaning                                                                  |
| --------- | -------------- | ------------------------------------------------------------------------ |
| **var**   | Function Scope | Exists anywhere inside the function it was declared in (ignores blocks). |
| **let**   | Block Scope    | Exists ONLY inside `{ }` where it is declared.                           |
| **const** | Block Scope    | Same as `let`, stays inside `{ }`.                                       |


-  Another important concept related to variables and scope is **hoisting**.

### Differences between var,let and const

| Feature                       | `var`             | `let`           | `const`                |
| ----------------------------- | ----------------- | --------------- | ---------------------- |
| Introduced in                 | ES5 (old)         | ES6 (2015)      | ES6 (2015)             |
| Scope                         | Function-scoped   | Block-scoped    | Block-scoped           |
| Accessible before declaration | Yes (`undefined`) | No (TDZ error)  | No (TDZ error)         |
| Hoisted                       | Yes               | Yes (TDZ)       | Yes (TDZ)              |
| Re-declaration in same scope  | Allowed         |  Not allowed   |  Not allowed          |
| Re-assignment                 | Allowed         |  Allowed       |  Not allowed          |
| Must be initialized           | No              |  No            |  Yes                  |
| Global object binding         | Yes (`window`)    | No              | No                     |
| Safe to use in loops          | No              |  Yes           |  Yes                  |
| Predictability                | Low               | High            | Very High              |
| Preferred in modern JS        | No              |  Yes           |  Yes                  |
| Typical usage                 | Legacy code       | Changing values | Constants & references |
