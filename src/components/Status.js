import React from 'react'

export const Status = ({ isLight }) => {
    return (
        <div className='status'>
            <button className="status__btn btn-all">all</button>
            <button className="status__btn btn-active">active</button>
            <button className="status__btn btn-completed">completed</button>
        </div>
    )
}
