import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "../atoms";
import { TodoListStats } from "./TodoListStats";
import { Todo } from "./Todo";
import { TodoListFilter } from "./TodoListFilter";
import { NewTodo } from "./NewTodo";
export function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);
  return (
    <>
      <TodoListStats />
      <div style={{ display: "flex", gap: "10px" }}>
        <NewTodo />
        <TodoListFilter />
      </div>
      {todoList.map((todoItem) => (
        <Todo item={todoItem} key={todoItem.id} />
      ))}
    </>
  );
}
