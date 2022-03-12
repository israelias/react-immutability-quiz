import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import Button1 from "./Button1";
import Button2 from "./Button2";
import Button3 from "./Button3";

/**
 * React Hooks Equality Comparison Quiz
 *
 * Reviewer:
 *    1. Start with Button1
 *    2. Comment out Button2 and Button3 below so on.
 *    3. Quiz questions are in each Button component.
 *    4. Hide the console window until candidate's first answer
 *    5. Hit refresh on the browser window on the right.
 *    6. Click the Button per quiz question.
 *    7. Expand the console window as required.
 *    8. Refresh the browser window on the right as required.
 *    9. Answers are at end of module in each Button.
 */

const obj1 = {
  a: 1,
  b: 2
};

const obj2 = {
  a: 1,
  b: 2
};

// console.log(obj1)
// console.log(obj2)

// console.log(obj1 === obj2)

const array1 = [
  { a: 1, b: 2 },
  { a: 1, b: 2 },
  { a: 1, b: 2 },
  { a: 1, b: 2 }
];

const array2 = array1.slice(0, 3);

// console.log(array1 === array2)

console.log(array1[0] === array2[0]);

// const array3 = array1.slice(0, 3)

// console.log(array3[0] === array1[0])
// console.log(array1 === array3)

// shallow copy (it copies object references), no mutation, both original and copy refer to the same object, if object updates, both update.

const App = () => {
  return (
    <>
      {/* <Button1 /> */}
      {/* <Button2 /> */}
      {/* <Button3 /> */}
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
