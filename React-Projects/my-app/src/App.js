import React from "react";

// importing components
import Navbar from "./components/Navbar";

//importing custom styles
import "./styles/app.css";
import Form from "./components/Form";

const randomNumber = (limit) => Math.floor(Math.random() * limit);

const QUESTIONS = "QUESTIONS";
const incrementQuestion = (question) => {
  // retrieve the question
  const questions = JSON.parse(localStorage.getItem(QUESTIONS));

  if (questions === null) {
    localStorage.setItem(QUESTIONS, JSON.stringify([{ question, count: 1 }]));
    return false;
  }

  // check if the question was in localstorage
  const index = questions.findIndex((e) => e.question === question);

  // if true
  if (index > -1) {
    // increment
    questions[index].count += 1;
  } else {
    // else
    // set to one
    questions.push({
      question,
      count: 1,
    });
  }

  localStorage.setItem(QUESTIONS, JSON.stringify(questions));
};

const getQuestions = () => JSON.parse(localStorage.getItem(QUESTIONS));

function App() {
  const [page, setPage] = React.useState(0);
  const [question, setQuestion] = React.useState("");
  const [options, setOptions] = React.useState([]);
  const [randOpt, setRandomOption] = React.useState(null);

  return (
    <div>
      <Navbar />
      {page === 0 && (
        <Form
          whenSubmitted={(question, options) => {
            setPage(1);
            setQuestion(question);
            setOptions(options);
            setRandomOption(randomNumber(options.length));
            incrementQuestion(question);
            console.log("Data arrived", question, options);
          }}
        />
      )}
      {page === 1 && (
        <span className="text-center">
          <div className="text-3xl">{question}</div>
          {options.map((e, idx) => (
            <li key={idx} className={idx === randOpt ? "text-red-500" : ""}>
              {idx + 1}. {e}
            </li>
          ))}
          <div className="content-center">
            <button
              className="text-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              type="text"
              onClick={() => {
                setPage(0);
              }}
            >
              Ask Another Random Qeustion
            </button>
          </div>
          <div>
            {getQuestions().map((e, idx) => (
              <div>
                {e.question} - {e.count}
              </div>
            ))}
          </div>{" "}
        </span>
      )}
    </div>
  );
}

export default App;
