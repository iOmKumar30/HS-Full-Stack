import { useEffect, useRef, useState } from "react";

function App() {
  const [words, setWords] = useState(0);
  const [paragraph, setParagraph] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const inputref = useRef(null);
  const buttonref = useRef(null);
  const generateParagraph = () => {
    let para = "";
    for (let i = 0; i < words; i++) {
      para += generateWords(Math.floor(Math.random() * 15) + 1) + " ";
    }
    setParagraph(para.trim());
    setInputValue("");
    setWords(0);
  };

  useEffect(() => {
    inputref.current.focus();
  }, [words]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      buttonref.current.click();
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Paragraph Generator
      </h1>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <input
          type="number"
          ref={inputref}
          placeholder="Enter number of words"
          value={inputValue}
          className="border border-gray-300 rounded-lg p-2 w-full mb-4"
          onChange={(e) => {
            setInputValue(e.target.value);
            setWords(Number(e.target.value));
          }}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={generateParagraph}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-600 transition duration-200"
          ref={buttonref}
        >
          Generate
        </button>
      </div>
      {paragraph && (
        <p className="mt-6 text-gray-700 text-lg bg-white p-4 rounded-lg shadow-md max-w-lg text-center">
          {paragraph}
        </p>
      )}
    </div>
  );
}

function generateWords(n) {
  let word = "";
  const alphabets = "QWERTYUIOPASDFGHJKLZXCVBNM";

  for (let i = 0; i < n; i++) {
    word += alphabets[Math.floor(Math.random() * alphabets.length)];
  }
  return word;
}

export default App;
