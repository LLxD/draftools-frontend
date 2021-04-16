import React from 'react'

function Search(searchString, setSearchString) {

    function handleChange(event) {
        setSearchString(event.target.value)
    }

    return (
        <div className="row">
            <div className="col">
                <h2>Pesquisa de campeões</h2>
            </div>
            <div className="col d-flex justify-content-end align-items-center">
                <input value={searchString} onChange={() => handleChange} className="form-control mr-sm-2 search" type="search" placeholder="Digite aqui um campeão" aria-label="Search" />
            </div>
        </div >
    )
}

export default Search
