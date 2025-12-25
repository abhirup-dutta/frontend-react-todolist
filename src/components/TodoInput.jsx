export default function TodoInput(props) {

    const {todoValue, handleSetTodoInput, handleAddTodos} = props;

    return (
        <header>
            <input value={todoValue}
                   onChange={ e => {
                       handleSetTodoInput(e.target.value);
                       }
                   }
                   placeholder="Enter Task Name..."/>
            <button onClick={()=>{
                handleAddTodos(todoValue);
                handleSetTodoInput('');
            }}>
                Add
            </button>
        </header>
    );
}