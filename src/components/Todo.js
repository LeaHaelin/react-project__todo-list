import React from 'react';
import iconCheck from '../images/icon-check.svg';
import iconCross from '../images/icon-cross.svg';


export const Todo = ({ todo }) => {


    return (
        <div className='todo'>
            <div className="todo__radio"><img className='todo__radio--check' src={iconCheck} alt="" /></div>
            <p className="todo__text">{todo.text}</p>
            <img className='todo__icon--delete' src={iconCross} alt="" />
        </div>
    )
}
