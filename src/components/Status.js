import React from 'react'
import { useEffect } from 'react'

export const Status = ({ todos, todoStatus, setTodoStatus, setFilteredTodos }) => {
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
    const statusHandler = (clickStatus) => {
        setTodoStatus(clickStatus);
    }
    return (
        <div className='status'>
            <button className="status__btn btn-all" onClick={() => { statusHandler("all") }}>all</button>
            <button className="status__btn btn-active" onClick={() => { statusHandler("active") }}>active</button>
            <button className="status__btn btn-completed" onClick={() => { statusHandler("completed") }}>completed</button>
        </div>
    )
}
