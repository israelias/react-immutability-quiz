/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { actions, dispatch } from "codesandbox-api";
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

const Welcome = () => (
  <div>
    <h1>Welcome</h1>
  </div>
);
const quiz1 = {
  start: {
    module: "Index",
    path: "/src/index.js",
    message: "start",
    component: Welcome,
    part: 0,
    backMessage: "Start",
    nextMessage: "Finished? Click to start next module."
  },
  button1: {
    module: "Button1",
    path: "/src/Button2.js",
    message: "Finished? Click to start next module.",
    component: Button1,
    part: 1,
    backMessage: "Go back to previous module.",
    nextMessage: "Finished? Click to start next module."
  },
  button2: {
    module: "Button2",
    path: "/src/Button2.js",
    message: "button2",
    component: Button2,
    part: 2,
    backMessage: "Go back to previous module.",
    nextMessage: "Finished? Click to start next module."
  },
  button3: {
    module: "Button3",
    path: "/src/Button2.js",
    message: "button3",
    component: Button3,
    part: 3,
    backMessage: "Go back to previous module.",
    nextMessage: "Restart."
  }
};

const App = () => {
  const [quiz, setQuiz] = useState(quiz1.start);
  const [message, setMessage] = useState("");

  // switch (part) {
  //   case 0:
  //     setQuiz(quiz1.start);
  //     break;
  //   case 1:
  //     setQuiz(quiz1.button1);
  //     break;
  //   case 2:
  //     setQuiz(quiz1.button2);
  //     break;
  //   case 3:
  //     setQuiz(quiz1.button3);
  //     break;
  //   default:
  //   // code block
  // }
  const handleClickForward = () => {
    window.alert("HAve you closed the console?");
  };

  const handleClickBack = () => {
    if (quiz.part === 3) {
      setQuiz(quiz1.button2);
    } else if (quiz.part === 2) {
      setQuiz(quiz1.button1);
    } else if (quiz.part === 1) {
      setQuiz(quiz1.start);
    } else {
      setQuiz(quiz1.button1);
    }
  };

  // setTimeout(() => {
  //   dispatch(actions.editor.openModule("/src/Button2.js"));
  // }, 2000);

  // useEffect(() => {
  //   if (module === 1) {
  //     setMessage(`Opening ${quiz.module}. Pleae hide the console.`);
  //     setTimeout(() => {
  //       dispatch(actions.editor.openModule(quiz.path));
  //     }, 2000);
  //   } else if
  //   (module === 1) {
  //     setMessage("Opening next module. Pleae hide the console.");
  //     setTimeout(() => {
  //       dispatch(actions.editor.openModule("/src/Button2.js"));
  //     }, 2000);
  //   } else
  //   if (module === 1) {
  //     setMessage("Opening next module. Pleae hide the console.");
  //     setTimeout(() => {
  //       dispatch(actions.editor.openModule("/src/Button2.js"));
  //     }, 2000);
  //   } else {
  //     setMessage("Opening next module. Pleae hide the console.");
  //     setTimeout(() => {
  //       dispatch(actions.editor.openModule("/src/index.js"));
  //     }, 2000);
  //   }

  // }, []);

  useEffect(() => {
    setTimeout(() => {
      setMessage(`Opening ${quiz.module}. Pleae hide the console.`);
    }, 1000);
    quiz.part === 0
      ? setTimeout(() => {
          setMessage(`Click start below to begin.`);
        }, 1000)
      : setTimeout(() => {
          setMessage(``);
        }, 1000);
    setTimeout(() => {
      dispatch(actions.editor.openModule(quiz.path));
      // dispatch(actions.editor.expandDevtools(0));
    }, 2000);
  }, [quiz]);
  return (
    <main>
      {quiz.component && <quiz.component />}

      {message && <p>{message}</p>}
      <footer
        style={{
          position: "fixed",
          left: 0,
          bottom: 0,
          width: "100%",
          padding: "20px 20px"
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <button onClick={handleClickBack}>{quiz.backMessage}</button>
            <p>
              <small>{message}</small>
            </p>
          </div>
          <div>
            {quiz.part > 0 && (
              <button onClick={handleClickForward}>{quiz.nextMessage}</button>
            )}
            <ul>
              <li>
                <small>Part: {quiz.part} of 3</small>
              </li>
              <li>
                <small>Module: {quiz.module}</small>
              </li>
              <li>
                <small>Path: {quiz.path}</small>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
