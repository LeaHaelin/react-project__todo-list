import React from 'react';
import { useState } from 'react';
import iconCheck from '../images/icon-check.svg';
import iconCross from '../images/icon-cross.svg';


export const Todo = ({ todo, todos, setTodos }) => {
    const deleteHandler = () => {
        // 2nd array copy from filter (t)
        setTodos(todos.filter(t => {
            //if the id from 1st map array is not the same with the id from 2nd filter array,
            if (todo.id !== t.id) {
                //return t item
                return t;
            }
        }));
    }


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



    return (
        <div className={todos.completed ? 'todo-item completed' : 'todo-item'} >
            <div className={todo.completed ? 'todo__radio completed' : 'todo__radio'} onClick={activeHandler}><img className='todo__radio--check' src={iconCheck} alt="" /></div>
            <p className={todo.completed ? 'todo__text completed' : 'todo__text'} onClick={activeHandler}>{todo.text}</p>
            <img onClick={deleteHandler} className='todo__icon--delete' src={iconCross} alt="" />
        </div>
    )
}
