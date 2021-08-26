import React from 'react';

function List({todos, setTodos, filteredTodos}){
    return(
        <div className="list">
            <ul>
                <li>Jog around the park 3x</li>
                <li>10 minutes meditation</li>
                <li>Read for 1 hour</li>
                <li>Pick up groceries</li>
                <li>Complete Todo App on Frontend Mentor</li>
            </ul>
        </div>
    )
}

export default List;