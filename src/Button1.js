/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

/**
 * Button1
 *
 * Reviewer:
 *    1. Comment out Button1 in {@link ./index.js}
 *    2. Hide the console window until candidate's first answer
 *    3. Hit refresh on the browser window on the right
 *
 * Questions:
 *    1. What, if any, will be printed on the console on first render?
 *    2. What, if any, will be printed on the console on first click?
 *
 */
const Button1 = () => {
  const [count, setCount] = useState(0);

  const obj1 = {
    a: 1,
    b: 2
  };

  console.log("a", count);

  useEffect(() => {
    console.log("obj1", obj1);
    setCount(count + obj1.a);
  }, []);

  const handleClick = () => {
    setCount(count + obj1.a);
    console.log(obj1);
  };

  return (
    <div>
      <button onClick={() => handleClick()}>{count}</button>
    </div>
  );
};
export default Button1;

/**
 * Button1
 *
 * Answers:
 *
 *    First render:
 *
 *      a 0
 *      obj1 {a: 1, b: 2}
 *      a 1
 *
 *
 *    First click:
 *
 *      {a: 1, b: 2}
 *      2
 *
 * Why?
 *    useEffect runs both after the first render and
 *    after every update.
 */
