import React from 'react'
import ChampionIcon from './ChampionIcon'

function ChampionList({ champions, addChampion }) {
  return (
<>
{/* Start: Search */}
<div className="container">
  <div className="row">
    <div className="col">
      <h2>Pesquisa de campeões</h2>
    </div>
    <div className="col d-flex justify-content-end align-items-center">
      <input className="form-control mr-sm-2 search" type="search" placeholder="Digite aqui um campeão" aria-label="Search" /><a href="/"><i className="fa fa-search search-icon text-white ml-2" style={{fontSize: 22}} /></a>
    </div>
  </div>
  <div className="row search-box border border-white rounded">
    {/* <h3 className="d-block w-100">{props.role}</h3> */}
    {champions.map((champion, index) => index < 100 && (
      <ChampionIcon key={index} nome={champion.id} tags="" img={champion.thumbnailUrl}/>)
      )}
</div>

</div>
{/* End: Search */}
</>
    )
}

export default ChampionList
