import { TodoItems } from "./TodoItems"

export function TodoList({todoItems, toggleTodoItem, deleteItem, setTodoItems}) {

    return (
        <ul className="list">
        {todoItems.length === 0 && "No Todo Items"}
        {todoItems.map(todo => { // Renders everytime there is changes in state.
          return (
            <TodoItems
            {...todo}
            key={todo.id}
            toggleTodoItem={toggleTodoItem}
            deleteItem={deleteItem}
            setTodoItems={setTodoItems}
        />
          )
        })}
      </ul>
    )
}