import React from "react";

// importing components
import Navbar from "./components/Navbar";

//importing custom styles
import "./styles/app.css";
import Form from "./components/Form";

const randomNumber = (limit) => Math.floor(Math.random() * limit);

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
            console.log("Data arrived", question, options);
          }}
        />
      )}
      {page === 1 && (
        <span>
          <div className="text-3xl">{question}</div>
          {options.map((e, idx) => (
            <li key={idx} className={idx === randOpt ? "text-red-500" : ""}>
              {idx + 1}. {e}
            </li>
          ))}
          <button type="text" onClick={() => {
            
          }}>
            Ask Another Random Qestion
          </button>
        </span>
      )}
    </div>
  );
}

export default App;
