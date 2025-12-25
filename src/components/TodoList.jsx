import React from "react";
import TodoCard from "./TodoCard.jsx";

export default function TodoList() {

    let todos = [
        'Dinosaur crochet class',
        'Roman Empire Thesis',
        'Brewing cider'
    ];

    return (
        <ul className='main'>
            {
                todos.map((todo, todoIndex) => {
                    return(
                        <TodoCard key={todoIndex}>
                            <p>{todo}</p>
                        </TodoCard>
                    )
                })
            }
        </ul>
    );
}