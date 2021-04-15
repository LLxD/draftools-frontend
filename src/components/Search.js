import React from 'react'

const Search = () => {
    return (
<div className="row">
    <div className="col">
      <h2>Pesquisa de campeões</h2>
    </div>
    <div className="col d-flex justify-content-end align-items-center">
      <input className="form-control mr-sm-2 search" type="search" placeholder="Digite aqui um campeão" aria-label="Search" /><a href="/"><i className="fa fa-search search-icon text-white ml-2" style={{fontSize: 22}} /></a>
    </div>
  </div>
    )
}

export default Search
