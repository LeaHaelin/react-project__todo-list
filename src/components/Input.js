import React from 'react'
import { v4 as uuidv4 } from 'uuid';

export const Input = ({ inputText, setInputText, todos, setTodos, isDarkMode, themes }) => {
    //-> <input>
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }
    // -> <form>
    const submitHandler = (e) => {
        // prevent form submission
        e.preventDefault()
        // update todos, put id:key so every updated list can have its own key.
        setTodos([...todos, { text: inputText, id: uuidv4(), completed: false }])
        // when submitHandler runs, <input> text area will be empty
        setInputText("")
    }

    return (
        <form className={isDarkMode ? 'input input--dark' : 'input input--light'} style={{ backgroundColor: themes.contentBgColor }} onSubmit={submitHandler}>
            <div className="input__radio" style={{ border: themes.todoRadioBorder }}></div>
            <input className='input__text-area' type="text" placeholder='Create a new todo…' value={inputText} onChange={inputTextHandler} style={{ color: themes.todoTextColor }} />
        </form>
    )
}