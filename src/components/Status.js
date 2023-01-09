import React from 'react'
import { useEffect } from 'react'

export const Status = ({ todos, todoStatus, setTodoStatus, setFilteredTodos, statusHandler }) => {
    //when todos or todoStatus runs, filterHandler will update status of the list.
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
        }
    }

    return (
        <div className='status'>
            <button className="status__btn" onClick={() => { statusHandler("all") }}>all</button>
            <button className="status__btn" onClick={() => { statusHandler("active") }}>active</button>
            <button className="status__btn" onClick={() => { statusHandler("completed") }}>completed</button>
        </div>
    )
}
