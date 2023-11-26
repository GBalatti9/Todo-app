import React from 'react'

export const Menu = ({ setFilter, showPendings, showDone }) => {
    return (
        <ul className="d-flex list-unstyled justify-content-around">
            <li> <button className="btn btn-outline-secondary" onClick={ () => setFilter('all') }> All </button> </li>
            <li> <button className="btn btn-outline-secondary" onClick={ showPendings }> Pending </button></li>
            <li> <button className="btn btn-outline-secondary" onClick={ showDone }> Done </button></li>
        </ul>
    )
}
