/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

/**
 * Button3
 *
 * Reviewer:
 *    1. Comment out Button3 in {@link ./index.js}
 *    2. Hide the console window until candidate's first answer
 *    3. Hit refresh on the browser window on the right
 *
 * Questions:
 *    1. What, if any, will be printed on the console on first render?
 *    2. What, if any, will be printed on the console on first click?
 *    3. What, if any, will be printed on the console on second click?
 */
const Button3 = () => {
  const [count, setCount] = useState(0);

  const obj1 = {
    a: 1,
    b: 2
  };

  console.log("a", count);

  const { a, b } = obj1;

  useEffect(() => {
    console.log("obj1", a, b);
    setCount(count + obj1.a);
  }, [a, b]);

  const handleClick = () => {
    console.log(count);
  };

  return (
    <div>
      <p>Button3</p>
      <button onClick={() => handleClick()}>{count}</button>
    </div>
  );
};
export default Button3;

/**
 * Button3
 *
 * Answers:
 *
 *    First render:
 *
 *      a 0
 *      obj1 1 2
 *      a 1
 *
 *
 *    First click:
 *
 *      1
 *
 *    Second click:
 *
 *      1
 *
 * Why?
 *
 *   Object destructuring allows us to create new variables using obj1's properties as the values.
 *   React uses Object.is comparison to the `a` and `b` variables we've listed in our effect dependencies,
 *   Because these never change, and our onClick simply logs `count`, our effect hook never triggers a re-render.
 *
 *
 *
 *
 *
 */
