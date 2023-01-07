import React from 'react';

import { Todo } from './Todo';

export const List = ({ todos, todo, setTodos, filteredTodos }) => {

    const clearCompletedHandler = () => {
        setTodos(todos.filter(t => t.completed === false))
    }


    return (
        <div className='list'>
            <ul className='list__todos' >
                {filteredTodos.map((todo) => {
                    // make a child component which we'll use repeatedly
                    return <Todo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
                })}
            </ul>
            <div className='list__control'>
                <p className='list__control--count'>{todos.filter(t => !t.completed).length} items left</p>
                <button className='list__control--button' onClick={clearCompletedHandler}>clear completed</button>
            </div>
        </div>
    )
}
