/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

/**
 * Button2
 *
 * Reviewer:
 *    1. Comment out Button2 in {@link ./index.js}
 *    2. Hide the console window until candidate's first answer
 *    3. Hit refresh on the browser window on the right
 *
 * Questions:
 *    1. What, if any, will be printed on the console on first render?
 *    2. What, if any, will be printed on the console on first click?
 *    3. What, if any, will be printed on the console on second click?
 */
const Button2 = () => {
  const [count, setCount] = useState(() => {
    console.log("b", 2);
    return 0;
  });

  const obj = {
    a: 1,
    b: 2
  };

  console.log("a", count);

  useEffect(() => {
    console.log("obj1", obj);
  }, [obj]);

  const handleClick = () => {
    setCount(count + obj.a);
    console.log("b", count);
  };

  return (
    <div>
      <p>Button2</p>
      <button onClick={() => handleClick()}>{count}</button>
    </div>
  );
};
export default Button2;

/**
 * Button2
 *
 * Answers:
 *
 *    First render:
 *
 *      b 2
 *      a 0
 *      obj1 {a: 1, b: 2}
 *
 *
 *    First click:
 *
 *      b 0
 *      a 1
 *      obj1 {a: 1, b: 2}
 *
 *    Second click:
 *
 *      b 1
 *      a 2
 *      obj1 {a: 1, b: 2}
 *
 * Why?
 *
 *    Lazily-initialized state variable is the first thing to mount. So `b 2` is rendered once,
 *    while return 0 as the initial value of `count`, thus `a 0` is printed. And since we're printing
 *    in our effect hook, `obj1 {a: 1, b: 2}` will render on first load as well.
 *
 *    On click, we setState which only affects the next render and does not change state in the already
 *    handler. Hence, `b` with the initial value of count is rendered first, then `a` with the new value
 *    count as a result of our triggered re-render.
 *
 *
 *    ie:
 *      console.log("a", count); // 0
 *
 *       const handleClick = () => {
 *          setCount(count + obj1.a); // request a re-render with `+ obj1.a` (+ 1)
 *          console.log("b", count);  // still 0! and triggers a re-render, thus `a` is printed again.
 *     };
 *
 *   Finally, our effect hook will always render obj1 even if we added it to our deps and made no changes to obj1.
 *   This is because objects are immutable datatypes, so every update creates a new value, leaving the old one untouched.
 *
 */
