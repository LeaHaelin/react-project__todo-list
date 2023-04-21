import React from 'react'
import { useEffect } from 'react'

export const Status = ({ todos, todoStatus, setFilteredTodos, statusHandler, themes }) => {
    //when todos or todoStatus is updated, filterHandler will switch the status of the todo.
    useEffect(() => {
        filterHandler()
    }, [todos, todoStatus])
    //filterHandler is for updating todoStatus([])
    const filterHandler = () => {
        switch (todoStatus) {
            case "all":
                setFilteredTodos(todos);
                break;
            case "active":
                setFilteredTodos(todos.filter(todo => todo.completed === false))
                break;
            case "completed":
                setFilteredTodos(todos.filter(todo => todo.completed === true))
                break;
            default:
                setFilteredTodos(todos);
                break;
        }
    }

    return (
        <div className='status' style={{ boxShadow: themes.listShadow, background: themes.contentBgColor }}>
            <button className="status__btn" onClick={() => { statusHandler("all") }}>all</button>
            <button className="status__btn" onClick={() => { statusHandler("active") }}>active</button>
            <button className="status__btn" onClick={() => { statusHandler("completed") }}>completed</button>
        </div>
    )
}
