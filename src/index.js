/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { actions, dispatch } from "codesandbox-api";

import "./styles.css";

import Start from "./Start";
import Button1 from "./Button1";
import Button2 from "./Button2";
import Button3 from "./Button3";
import Confirm from "./Confirm";

// import useForceUpdate from "./ForceUpdate";

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

const quiz1 = {
  start: {
    module: "start",
    path: "/src/index.js",
    message: "start",
    component: Start,
    part: 0,
    backMessage: "Start",
    nextMessage: "Finished? Click to start next module."
  },
  button1: {
    module: "button1",
    path: "/src/Button2.js",
    message: "Finished? Click to start next module.",
    component: Button1,
    part: 1,
    backMessage: "Go back to previous module.",
    nextMessage: "Finished? Click to start next module."
  },
  button2: {
    module: "button2",
    path: "/src/Button2.js",
    message: "button2",
    component: Button2,
    part: 2,
    backMessage: "Go back to previous module.",
    nextMessage: "Finished? Click to start next module."
  },
  button3: {
    module: "button3",
    path: "/src/Button2.js",
    message: "button3",
    component: Button3,
    part: 3,
    backMessage: "Go back to previous module.",
    nextMessage: "Restart."
  }
};

// const useForceUpdate = (quizModule) => {
//   const [quiz, setQuiz] = useState(quiz1.start); // integer state
//   return () => setQuiz(quizObject => quizObject[quizModule]); // update the state to force render
// }

const App = () => {
  const [quiz, setQuiz] = useState(quiz1.start);
  const [message, setMessage] = useState("");
  // const forceUpdate = useForceUpdate();

  const useForceUpdate = () => {
    //const [quiz, setQuiz] = useState(quiz1.start); // integer state
    return () => setQuiz((quiz1) => quiz1[module]); // update the state to force render
  };

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
    }, 2000);
  }, [quiz]);

  
  return (
    <main>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          {quiz.component && <quiz.component />}

          {message && <p>{message}</p>}
        </div>
        <div>
          <button onClick={useForceUpdate}>Refresh</button>
        </div>
      </div>

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
            <Confirm
              handleConfirm={handleClickBack}
              confirmText={quiz.backMessage}
            />
            {/* <button onClick={handleClickBack}>{quiz.backMessage}</button> */}
            <p>
              <small>{message}</small>
            </p>
          </div>
          <div>
            {quiz.part > 0 && (
              <Confirm
                handleConfirm={handleClickForward}
                confirmText={quiz.nextMessage}
              />
              // <button onClick={handleClickForward}>{quiz.nextMessage}</button>
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
