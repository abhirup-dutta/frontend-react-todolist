import TodoInput from "./components/TodoInput.jsx";
import TodoList from "./components/TodoList.jsx";
import {useState, useEffect} from "react";


function App() {

    const [todos, setTodos] = useState([]);
    const [todoValue, setTodoValue] = useState('');

    /*
     * Always persist new data, not just current todos
     * because there could be race-condition in
     * updating todos vs persisting in local storage
     */
    function persistData(newTodos) {
        localStorage.setItem('todos', JSON.stringify({
            'todos' : newTodos
        }));
    }

    function handleAddTodos(newTodo) {
        const newTodos = [...todos, newTodo];
        setTodos(newTodos);
        persistData(newTodos);
    }

    function handleDeleteTodo(index) {
        const newTodos = todos.filter((todo, todoIndex) => todoIndex !== index);
        setTodos(newTodos);
        persistData(newTodos);
    }

    /*
     * Editing is handled by deleting the data from
     * the list and instead putting it in the input box
     * like adding a new value.
     */
    function handleEditTodo(index) {
        let todoContent = todos[index];
        handleSetTodoInput(todoContent);
        handleDeleteTodo(index);
    }

    function handleSetTodoInput(todoValue) {
        setTodoValue(todoValue);
    }

    useEffect(() => {
        if (!localStorage) {
            return;
        }
        let localTodos = localStorage.getItem('todos');
        if (!localTodos) {
            return;
        }
        localTodos = JSON.parse(localTodos).todos;

        setTodos(localTodos);

    }, []);

  return (
    <>
        <TodoInput todoValue={todoValue}
                   handleSetTodoInput={handleSetTodoInput}
                   handleAddTodos={handleAddTodos}
        />
        <TodoList todos={todos}
                  handleDeleteTodo={handleDeleteTodo}
                  handleEditTodo={handleEditTodo}
        />
    </>
  )
}

export default App
