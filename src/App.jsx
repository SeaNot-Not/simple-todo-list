import { TodoProvider } from "./context/TodoContext";
import "./styles.css";
import { TodoApp } from "./TodoApp.jsx";

const App = () => {
  return (
    <TodoProvider>
      <TodoApp />
    </TodoProvider>
  );
};

export default App;
