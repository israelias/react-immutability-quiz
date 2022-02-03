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
      <p>Button1</p>
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
 *      a 2
 *
 * Why?
 *    useEffect runs after the first render and
 *    after every update. Our setState update inside our effect hook
 *    triggers an update, thus and immediate re-render. Hence `a` is printed twice on first render.
 */
