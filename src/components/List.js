import React from 'react';
import { Todo } from './Todo';

export const List = ({ todos, setTodos, filteredTodos, statusHandler, themes, isDarkMode }) => {
    const clearCompletedHandler = () => {
        setTodos(todos.filter(t => t.completed === false))
    }

    return (
        <div className='list' style={{ background: themes.contentBgColor }}>
            <ul className='list__todos' >
                {filteredTodos.map((todo) => {
                    // make a child component which we'll use repeatedly.
                    return <Todo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} themes={themes} isDarkMode={isDarkMode} />
                })}
            </ul>
            <div className='list__controller' >
                <p className='list__counter' style={{ color: themes.listTextColor }} >{todos.filter(t => !t.completed).length} items left</p>
                <div className="list__status--desktop">
                    <button className={isDarkMode ? "status__btn dark" : "status__btn light"} onClick={() => { statusHandler("all") }}>all</button>
                    <button className={isDarkMode ? "status__btn dark" : "status__btn light"} onClick={() => { statusHandler("active") }}>active</button>
                    <button className={isDarkMode ? "status__btn dark" : "status__btn light"} onClick={() => { statusHandler("completed") }}>completed</button>
                </div>
                <button className={isDarkMode ? 'list__clear dark' : 'list__clear light'} onClick={clearCompletedHandler} >clear completed</button>
            </div>
        </div>
    )
}
