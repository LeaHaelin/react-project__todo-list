import React from 'react';
import { Todo } from './Todo';

export const List = ({ todos, setTodos, filteredTodos, statusHandler, themes }) => {
    const clearCompletedHandler = () => {
        setTodos(todos.filter(t => t.completed === false))
    }

    return (
        <div className='list' style={{ background: themes.inputListBgColor }}>
            <ul className='list__todos' >
                {filteredTodos.map((todo) => {
                    // make a child component which we'll use repeatedly.
                    return <Todo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} themes={themes} />
                })}
            </ul>
            <div className='list__control'>
                <p className='list__control--counter'>{todos.filter(t => !t.completed).length} items left</p>
                <div className="list__status--desktop">
                    <button className="status__btn" onClick={() => { statusHandler("all") }}>all</button>
                    <button className="status__btn" onClick={() => { statusHandler("active") }}>active</button>
                    <button className="status__btn" onClick={() => { statusHandler("completed") }}>completed</button>
                </div>
                <button className='list__control--clear' onClick={clearCompletedHandler}>clear completed</button>
            </div>
        </div>
    )
}
