import React from 'react';
import { Todo } from './Todo';

export const List = ({ isLight, todos, setTodos }) => {



    return (
        <div className='list'>
            <ul className='list__todos' >
                {todos.map((todo) => {
                    // make a child component which we'll use repeatedly
                    return <Todo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
                })}
            </ul>
            <div className="list__control">
                <p className="list__control--count">5 items left</p>
                <div className="list__control--buttons">
                    <button className='list__control--button'>clear</button>
                    <button className='list__control--button'>completed</button>
                </div>
            </div>
        </div>
    )
}
