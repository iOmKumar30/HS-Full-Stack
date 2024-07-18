import { useState, useRef, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../atoms";

let id = 0;

export function NewTodo() {
  const inputref = useRef(null);
  const buttonRef = useRef(null);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      buttonRef.current.click();
    }
  };
  useEffect(() => {
    inputref.current.focus();
  }, []);
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: id++,
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
    inputref.current.focus();
  };

  return (
    <div>
      <input
        ref={inputref}
        type="text"
        value={inputValue}
        onKeyDown={handleKeyDown}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button ref = {buttonRef} onClick={addItem}>Add</button>
    </div>
  );
}
