import React from "react";

const ToDo = ({todo, handleCheck}) => {
    return (
        <li>
            <div>
                <div>
                    <input type="checkbox" checked={todo.completed}
                    onChange={() => handleCheck(todo.id)} />
                    {todo.title}
                </div>
                <div>
                    <button type="button"
                    aria-label='Close'>
                    X</button>
                </div>
            </div>
        </li>
    )
}

export default ToDo