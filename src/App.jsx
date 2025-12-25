import TodoInput from "./components/TodoInput.jsx";
import TodoList from "./components/TodoList.jsx";
import {useState} from "react";


function App() {

    const [todos, setTodos] = useState([
        'Dinosaur crochet class',
        'Roman Empire Thesis',
        'Brewing cider'
    ]);

    function handleAddTodos(newTodo) {
        setTodos([...todos, newTodo]);
    }

  return (
    <>
        <TodoInput handleAddTodos={handleAddTodos}/>
        <TodoList todos={todos}/>
    </>
  )
}

export default App
