/* eslint-disable react-hooks/exhaustive-deps */
"use-strict";
import React, { useState, useEffect } from "react";

/**
 * Button4
 *
 * Reviewer:
 *    1. Comment out Button1 in {@link ./index.js}
 *    2. Hide the console window until candidate's first answer
 *    3. Hit refresh on the browser window on the right
 *
 * Questions:
 *    1. What, if any, will be printed on the console on first render?
 *    2. What, if any, will be printed on the console on first click?
 *    2. What, if any, will be printed on the console on third click?
 */
const Button1 = () => {
  const [data, setData] = useState(() => {
    console.log("useState"); //
    return { count: 0 };
  });

  console.log("Render"); //

  const onIncrement = () => {
    data.count += 1;
    setData(data);
    console.log("Count: ", data.count); //
  };

  useEffect(() => {
    console.log(`New count: ${data.count}`); //
  }, [data]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
      }}
    >
      <h3> Count: {data.count} </h3>
      <button onClick={onIncrement}>Incerement</button>
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
 *    useState
 *    Render
 *    New count: 0
 *
 *
 *
 *    First click:
 *
 *     Count: 1
 *
 *
 *
 *
 *    Second click:
 *
 *      Count: 2
 *
 *
 *
 */
