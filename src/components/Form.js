import React from 'react';

function Form({setInputText, todos, setTodos, inputText, setStatus}){
    const inputTextHandler = (e)=>{
        console.log(e.target.value);
    };
    const submitTodoHandler = (e)=>{
        e.preventDefault();
        setTodos([
            ...todos, 
            {text: inputText, completed: false, id: Math.random()*100}
        ]);
        setInputText('');
    };
    return(
        <form>
            <input
                value={inputText}
                onChange={inputTextHandler}
                type="text"
                className="input"
            />
            <button onClick={submitTodoHandler} className="button" type="submit"></button>
        </form>
    );
}

export default Form;