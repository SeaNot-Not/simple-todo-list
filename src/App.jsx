import { TodoProvider } from "./context/TodoContext";
import "./styles.css";
import { TodoApp } from "./TodoApp.jsx";

// ADD COMMENT HAHA

const App = () => {
  return (
    <TodoProvider>
      <TodoApp />
    </TodoProvider>
  );
};

export default App;
