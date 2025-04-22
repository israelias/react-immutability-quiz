import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import Button1 from "./Button1";
import Button2 from "./Button2";
import Button3 from "./Button3";
import Button4 from "./Button3";

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

const App = () => {
  return (
    <>
      {/* <Button1 /> */}
      {/* <Button2 /> */}
      {/* <Button3 /> */}
      <Button4 />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
