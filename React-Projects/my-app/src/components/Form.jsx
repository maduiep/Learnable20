import React from "react";

export function Form(props) {
  const [state, setState] = React.useState(0);
  const [question, setQuestion] = React.useState("");
  const [options, setOptions] = React.useState(["Hello", "Morgan", "Sinais"]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.whenSubmitted(question, options);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <label>Question</label>
      {/* you'll need to store the input in state */}
      <input
        type="text"
        className="border border-gray-200 py-5 px-5 w-full"
        value={question}
        onChange={(evt) => {
          console.log("typing", evt.target.value);
          setQuestion(evt.target.value);
        }}
      />
      <div className="flex flex-col">
        <label>Options</label>
        {options.map((e, idx) => (
          <input
            key={idx}
            value={e}
            className="border border-gray-200 py-5 px-5 w-full mb-2"
            type="text"
            onChange={(evt) => {
              const arr = [...options];
              arr[idx] = evt.target.value;
              setOptions(arr);
            }}
          />
        ))}
        <div className="flex justify-between">
          <button
            type="button"
            className="px-6 py-4 self-start border rounded-lg text-gray-800"
            onClick={() => setOptions([...options, "Joseph"])}
          >
            + Add Options
          </button>

          <button className="px-6 py-4 self-start bg-blue-500 rounded-lg text-white">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
