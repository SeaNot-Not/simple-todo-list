import { TodoItems } from "./TodoItems";
import { ifNoTodoItemsDisplay } from "./utils/ConditionUtilities";

export function TodoList({ todoItems }) {
  return (
    <ul className="list">
      {ifNoTodoItemsDisplay(todoItems, "No Todo Items")}
      {todoItems.map((todo) => {
        return <TodoItems {...todo} key={todo.id} />;
      })}
    </ul>
  );
}
