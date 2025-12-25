import React from "react";

export default function TodoCard(props) {

    const {children, handleDeleteTodo, handleEditTodo, index} = props;

    return (
        <li className='todoItem'>
            {children}
            <div className='actionsContainer'>
                <button onClick={() => {
                    handleEditTodo(index);
                }}>
                    Edit
                </button>
                <button onClick={() => {
                    handleDeleteTodo(index);
                }}>Delete</button>
            </div>
        </li>
    );
}