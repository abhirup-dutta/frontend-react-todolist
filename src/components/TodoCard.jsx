import React from "react";

export default function TodoCard(props) {

    const {children, handleDeleteTodo, handleEditTodo, index} = props;

    return (
        <li className='todoItem'>
            {children}
            <div className='actionsContainer'>
                <button class='sleek-silver-btn'
                        onClick={() => {
                    handleEditTodo(index);
                }}>
                    Edit
                </button>
                <button class='sleek-silver-btn'
                    onClick={() => {
                    handleDeleteTodo(index);
                }}>Delete</button>
            </div>
        </li>
    );
}