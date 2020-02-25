import React from 'react'

export default function Pagination({ goToNextPage, goToPrevPage }) {
    return (
        <div className="pokeContainer">
            {goToPrevPage && <button onClick={goToPrevPage}>Previous</button>}
            {goToNextPage && <button onClick={goToNextPage}>Next</button>}
        </div>
    )
}
