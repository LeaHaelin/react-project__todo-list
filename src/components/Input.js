import React from 'react'
import { v4 as uuidv4 } from 'uuid';

export const Input = ({ isLight, inputText, setInputText, todos, setTodos }) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    } //-> <input>

    const submitHandler = (e) => {
        e.preventDefault()
        // prevent inputText disappear
        setTodos([...todos, { text: inputText, id: uuidv4() }])
        // update todos, put id so every updated list can have key
        setInputText("")
        // when submitHandler runs, <input> text area will be empty
    } // -> <form>

    return (
        <form className='input-box' onSubmit={submitHandler}>
            <div className="radio"></div>
            <input className='input_text-area' type="text" placeholder='Create a new todo…' maxLength="36" value={inputText} onChange={inputTextHandler} />
        </form>
    )
}