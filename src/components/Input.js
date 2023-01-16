import React from 'react'
import { v4 as uuidv4 } from 'uuid';

export const Input = ({ inputText, setInputText, todos, setTodos, active }) => {
    //-> <input>
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    // -> <form>
    const submitHandler = (e) => {
        // prevent form submission
        e.preventDefault()
        // update todos, put id so every updated list can have key
        setTodos([...todos, { text: inputText, id: uuidv4(), completed: false }])
        // when submitHandler runs, <input> text area will be empty
        setInputText("")
    }

    return (
        <form className='input-box' onSubmit={submitHandler}>
            <div className="radio"></div>
            <input className='input_text-area' type="text" placeholder='Create a new todo…' value={inputText} onChange={inputTextHandler} />
        </form>
    )
}