import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton(props) {

    const onClickButton = (msg) => {
        alert(msg);
    }

    return (
        <button 
            className="CreateTodoButton"
            onClick={() => onClickButton("Aqui va la logica para crear un nuevo TODO")}
        >
            +
        </button>
    );
}

export { CreateTodoButton };