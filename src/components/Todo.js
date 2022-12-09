import React from 'react';
import iconCheck from '../images/icon-check.svg';
import iconCross from '../images/icon-cross.svg';


export const Todo = ({ todo, todos, setTodos }) => {
    const deleteHandler = () => {
        // 2nd array copy from filter (t)
        setTodos(todos.filter(t => {
            if (todo.id !== t.id) {
                return t;
            }
        }));

    }

    return (
        <div className='todo'>
            <div className="todo__radio"><img className='todo__radio--check' src={iconCheck} alt="" /></div>
            <p className="todo__text">{todo.text}</p>
            <img onClick={deleteHandler} className='todo__icon--delete' src={iconCross} alt="" />
        </div>
    )
}
