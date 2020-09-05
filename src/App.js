import React, { useState } from "react";
import "./App.css";
import Question from "./Components/Question/question-com";

function App() {
  document.title = "A Quiz App";
  const [questions, setQuestions] = useState({
    101: {
      question: "This app is build using?",
      answer: "React JS",
      options: ["Angular", "Plain HTML and CSS", "React JS", "Vue JS"],
      userResponse: null,
    },
    102: {
      question: "Answer of 2/4*6-12*5",
      answer: -57,
      options: [-77, -57, -43, -39],
      userResponse: null,
    },
    103: {
      question: "This app is deployed on?",
      answer: "Netlify",
      options: ["Heroku", "Google", "Netlify", "Microsoft"],
      userResponse: null,
    },
    104: {
      question: "In React hooks we use ______ instead of componentDidMount()?",
      answer: "useEffect()",
      options: ["useEffect()", "useRef()", "useState()", "useMount()"],
      userResponse: null,
    },
    105: {
      question: "This app is build using?",
      answer: "React JS",
      options: ["Angular", "Plain HTML and CSS", "React JS", "Vue JS"],
      userResponse: null,
    },
  });

  const [show, setShow] = useState(false);
  const [score, setscore] = useState(0);
  const [scoreHidden, setscoreHidden] = useState(true);

  let handleOptionChange = (event) => {
    let key = event.target.getAttribute("question-id");
    let a = !show ? null : setShow(!show);
    let b = !scoreHidden ? setscoreHidden(!scoreHidden) : null;
    setQuestions({
      ...questions,
      [key]: {
        ...questions[key],
        userResponse:
          event.target.getAttribute("value") === String(questions[key].answer),
      },
    });
  };

  let handleSubmit = () => {
    setShow(!show);
    setscoreHidden(!scoreHidden);
    let sco = 0;
    for (let question in questions)
      var a = questions[question].userResponse ? sco++ : null;
    setscore(sco);
  };

  let br = {
    padding: "40px",
  };

  return (
    <div className="App">
      <span
        style={{
          color: "white",
        }}
      >
        &larr;
      </span>
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          height: "100vh",
          textAlign: "left",
          display: "flex",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            width: "20%",
          }}
        >
          <p
            style={{
              width: "100%",
              textAlign: "center",
              fontSize: "4vw",
              color: "black",
            }}
          >
            A
            <div style={br} />
            QUIZ
            <div style={br} />
            APP
            <div style={br} />
            FOR
            <div style={br} />
            YOU
          </p>
        </div>

        <div
          style={{
            marginLeft: "15vw",
            height: "100vh",
            overflowY: "auto",
            width: "100%",
          }}
        >
          {!scoreHidden ? (
            <span
              style={{
                fontWeight: "bolder",
              }}
            >
              Your Score:{score}
            </span>
          ) : (
            <span
              style={{
                visibility: "hidden",
              }}
            >
              hidden
            </span>
          )}

          {Object.keys(questions).map((key, index) => {
            return (
              <div key={key}>
                <div key={"outer"}>
                  <div
                    style={{
                      display: "inline-flex",
                    }}
                  >
                    <p>Question : {questions[key].question}</p>
                    {show ? (
                      questions[key].userResponse ? (
                        <span
                          style={{
                            margin: "17px 0px 0px 40px",
                          }}
                        >
                          &#9989;
                        </span>
                      ) : (
                        <span
                          style={{
                            margin: "17px 0px 0px 40px",
                          }}
                        >
                          &#10060;
                        </span>
                      )
                    ) : null}
                  </div>
                  {
                    <ul>
                      {questions[key].options.map((option, index) => {
                        return (
                          <Question
                            key={index}
                            id={index}
                            question_id={key}
                            handleOptionChange={handleOptionChange}
                            option={option}
                          />
                        );
                      })}
                    </ul>
                  }
                </div>
              </div>
            );
          })}

          <button onClick={handleSubmit}>
            {scoreHidden ? "Submit" : "Unsubmit"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
