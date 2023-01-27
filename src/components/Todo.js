import React, { useState } from 'react';
import iconCheck from '../images/icon-check.svg';
import iconCross from '../images/icon-cross.svg';


export const Todo = ({ todo, todos, setTodos }) => {
    const [editedText, setEditedText] = useState(""); //to edit and save todo's inputText to editedText
    const [doubleClick, setDoubleClick] = useState(false); //to check if it's double clicked
    //to delete the todo from the list
    const deleteHandler = () => {
        // the 2nd array copy from filter (t)
        setTodos(todos.filter(t => { return todo.id !== t.id }));
    }
    //to check if the todo's status is active or completed.
    const activeHandler = () => {
        setTodos(todos.map(td => {
            if (todo.id === td.id) {
                return {
                    ...td,
                    completed: !td.completed
                }
            } else {
                return td;
            }
        }))
    }
    //to edit original inputText
    const editTextHandler = (e) => {
        e.preventDefault() //to prevent automatic submit the form
        setTodos(todos.map(td => {
            if (todo.id === td.id) { //if the todo's id is the same as the mapped td's id that user clicked
                return { //return all previous properties and the text:edtedText
                    ...td,
                    text: editedText
                }
            } else { //return all previous properties, which will be the same as the original ones.
                return td
            }
        }))
        setDoubleClick(!doubleClick) //to reset double click status
    }

    return (
        <div className={todos.completed ? 'todo-item completed' : 'todo-item'} >
            {doubleClick ?
                <form className='todo-form' onSubmit={editTextHandler}>
                    <input className='todo-input' type="text" value={editedText} onChange={e => setEditedText(e.target.value)} />
                    <img onClick={deleteHandler} className='todo__icon--delete' src={iconCross} alt='todo-delete' />
                </form>
                :
                <div className={todos.completed ? 'todo-item__inner completed' : 'todo-item__inner'} onDoubleClick={() => setDoubleClick(!doubleClick)}>
                    <div className={todo.completed ? 'todo__radio completed' : 'todo__radio'} onClick={activeHandler}><img className='todo__radio--check' src={iconCheck} alt="todo-check" /></div>
                    <p className={todo.completed ? 'todo__text completed' : 'todo__text'} onClick={activeHandler}>{todo.text}</p>
                    <img onClick={deleteHandler} className='todo__icon--delete' src={iconCross} alt='todo-delete' />
                </div>
            }
        </div >
    )
}
