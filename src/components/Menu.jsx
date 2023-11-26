import React from 'react'

export const Menu = ({ setFilter, showPendings, showDone }) => {
    return (
        <ul className="d-flex list-unstyled justify-content-around">
            <li onClick={ () => setFilter('all') } className='cursor-pointer'>  All </li>
            <li onClick={ showPendings } className='cursor-pointer'>  Pending</li>
            <li onClick={ showDone } className='cursor-pointer'>  Done</li>
        </ul>
    )
}
